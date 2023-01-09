import { getDomainLocale } from "next/dist/shared/lib/router/router";
import toast from "react-hot-toast";
import { post } from "../pages/api/post";
import { getPoolCount, getPoolInfo, getStakeInfo } from "./utils";
const ethers = require("ethers");
const axios = require("axios");
let provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
let launcher_abi = require("./abi/launcher.json");
let erc20_abi = require("./abi/revol.json");
let factory_abi = require("./abi/factory.json");
let erc20ABI = require("./abi/erc20.json");

let factory_contract = "0x46e26B0Dd6a6d109aDd3eE19595Eac96bd9e54FA";
let busd_token = "0xf5c678f540d684208499d1c2babdf993b9b46a41";
let launcher_contract = "0x5AA5C2FbC942b393a38c9697563c8E675e99E98A";
let launcherContract = new ethers.Contract(
  launcher_contract,
  launcher_abi,
  provider
);

export const saleInfo = async (address) => {
  let launcherContract = new ethers.Contract(address, launcher_abi, provider);

  try {
    let info = await launcherContract.s();
    return info;
  } catch (err) {
    console.log(err);
  }
};

export const getAllocationPerStake = async (
  address,

  stakeAmount
) => {
  debugger;
  let launcherContract = new ethers.Contract(address, launcher_abi, provider);
  try {
    let info = await launcherContract.getAllocationPerStake(stakeAmount);

    return info;
  } catch (err) {
    console.log(err);
  }
};

export const getTotalSales = async (projectId) => {
  try {
    let totalSale = await launcherContract.sales();
    return totalSale;
  } catch (err) {
    console.log(err);
  }
};

export const purchaseInfo = async (projectId, user) => {
  try {
    let info = await launcherContract.stakeSalePurchase(projectId, user);
    return info;
  } catch (err) {
    console.log(err);
  }
};

export const getTokenSymbol = async (tokenAddress) => {
  let erc20Contract = new ethers.Contract(tokenAddress, erc20ABI, provider);
  try {
    let info = await erc20Contract.symbol();
    return info;
  } catch (err) {
    console.log(err);
  }
};

export const getTokenDecimal = async (tokenAddress) => {
  let erc20Contract = new ethers.Contract(tokenAddress, erc20ABI, provider);
  try {
    let info = await erc20Contract.decimals();
    return info;
  } catch (err) {
    console.log(err);
  }
};

export const deployContract = async (payload, address, signer, tokenvalues) => {
  let contract = new ethers.Contract(factory_contract, factory_abi, signer);
  let tx = await contract.createNewProject(busd_token, address);
  let id = toast.loading(
    (t) => (
      <span>
        Deploying Contract.
        <br />
        <a
          className="blue text-sm mt-2"
          href={`https://testnet.bscscan.com/tx/${tx.hash}`}
          target="_blank"
          rel="noreferrer"
        >
          View on Bscscan
        </a>
      </span>
    ),
    { position: "top-right" }
  );

  const rc = await tx.wait(); // 0ms, as tx is already confirmed
  const event = rc.events.find((event) => event.event === "ProjectCreated");
  payload.data.contract_address = event.args.conAddr;

  toast.dismiss(id);
  toast.success(`Contract Deployed Successfully`, {
    position: "top-right",
  });

  let contract1 = new ethers.Contract(event.args.conAddr, launcher_abi, signer);
  try {
    let tx1 = await contract1.createSale(
      payload.data.project_token_address,
      Number(payload.data.decimal),
      ethers.utils.parseUnits(
        String(tokenvalues.total_sale),
        Number(payload.data.decimal)
      ),
      ethers.utils.parseUnits(
        String(tokenvalues.public_allocation),
        Number(payload.data.decimal)
      ),
      ethers.utils.parseUnits(payload.data.price, 8),

      [
        payload.data.stake_start_time,
        payload.data.stake_end_time,
        payload.data.public_sale_start_time,
        payload.data.public_sale_end_time,
      ],
      Number(payload.data.stake_pool_id),
      ethers.utils.parseUnits(
        String(tokenvalues.public_per_wallet),
        Number(payload.data.decimal)
      ), /// public pre wallet
      false, /// vested
      !payload.data.stake_type
    );

    let id1 = toast.loading(
      (t) => (
        <span>
          Creating a project.Transaction pending
          <br />
          <a
            className="blue text-sm mt-2"
            href={`https://testnet.bscscan.com/tx/${tx1.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Bscscan
          </a>
        </span>
      ),
      { position: "top-right" }
    );
    await tx1.wait();
    toast.dismiss(id1);
    toast.success(`Project Created Successfully`, {
      position: "top-right",
    });

    payload.data.project_id = parseInt(
      ethers.utils.hexStripZeros(event.args.projectId),
      16
    ).toString();

    var dbTx = toast.loading(
      (t) => (
        <span>
          Indexing Your Transaction
          <br />
        </span>
      ),
      { position: "top-right" }
    );
  } catch (e) {
    console.log(e);
  }

  //DB insert function

  try {
    let res = await post("project-masters", payload);

    toast.dismiss(dbTx);
    toast.success(`Indexing Successful`, {
      position: "top-right",
    });
  } catch (err) {
    toast.dismiss(dbTx);
    toast.error(`Oops Something went wrong`, {
      position: "top-right",
    });
  }
};

export const buyWithBNB = async (address, amountInBNB, signer) => {
  debugger;
  let contract = new ethers.Contract(address, launcher_abi, signer);
  try {
    let tx = await contract.publicPurchaseWithBNB({
      value: ethers.utils.parseEther(amountInBNB),
    });
    let id = toast.loading(
      (t) => (
        <span>
          Transaction Pending
          <br />
          <a
            className="blue text-sm mt-2"
            href={`https://testnet.bscscan.com/tx/${tx.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Bscscan
          </a>
        </span>
      ),
      { position: "top-right" }
    );
    await tx.wait();
    toast.dismiss(id);
    toast.success("Transaction Successful", { position: "top-right" });
  } catch (err) {
    console.log(err);

    toast.error(err.data ? err.data.message : err.message, {
      position: "top-right",
    });
  }
};

export const buyWithBUSD = async (address, amountInUSD, signer) => {
  let contract = new ethers.Contract(address, launcher_abi, signer);
  let amount = parseInt(Number(amountInUSD) * 10 ** 8);

  try {
    let tx = await contract.publicPurchaseWithBUSD(amount);
    let id = toast.loading(
      (t) => (
        <span>
          Transaction Pending
          <br />
          <a
            className="blue text-sm mt-2"
            href={`https://testnet.bscscan.com/tx/${tx.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Bscscan
          </a>
        </span>
      ),
      { position: "top-right" }
    );
    await tx.wait();
    toast.dismiss(id);
    toast.success("Transaction Successful", { position: "top-right" });
  } catch (err) {
    console.log(err);
    toast.error(err.data ? err.data.message : err.message, {
      position: "top-right",
    });
  }
};

export const reservedBuyWithBNB = async (address, amountInBNB, signer) => {
  let contract = new ethers.Contract(address, launcher_abi, signer);
  try {
    let tx = await contract.allocatedPurchaseWithBNB({
      value: ethers.utils.parseEther(amountInBNB),
    });
    let id = toast.loading(
      (t) => (
        <span>
          Transaction Pending
          <br />
          <a
            className="blue text-sm mt-2"
            href={`https://testnet.bscscan.com/tx/${tx.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Bscscan
          </a>
        </span>
      ),
      { position: "top-right" }
    );
    await tx.wait();
    toast.dismiss(id);
    toast.success("Transaction Successful", { position: "top-right" });
  } catch (err) {
    toast.error(err.data ? err.data.message : err.message, {
      position: "top-right",
    });
  }
};

export const reservedBuyWithBUSD = async (address, amountInUSD, signer) => {
  let contract = new ethers.Contract(address, launcher_abi, signer);
  let amount = parseInt(Number(amountInUSD) * 10 ** 8);

  try {
    let tx = await contract.allocatedPurchaseWithBUSD(amount);
    let id = toast.loading(
      (t) => (
        <span>
          Transaction Pending
          <br />
          <a
            className="blue text-sm mt-2"
            href={`https://testnet.bscscan.com/tx/${tx.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Bscscan
          </a>
        </span>
      ),
      { position: "top-right" }
    );
    await tx.wait();
    toast.dismiss(id);
    toast.success("Transaction Successful", { position: "top-right" });
  } catch (err) {
    console.log(err);
    toast.error(err.data ? err.data.message : err.message, {
      position: "top-right",
    });
  }
};

export const approveAnyToken = async (address, amount, decimal, signer) => {
  try {
    let localContract = new ethers.Contract(address, erc20_abi, signer);
    let tx = await localContract.approve(
      launcher_contract,
      ethers.utils.parseUnits(amount, Number(decimal))
    );
    let id = toast.loading(
      (t) => (
        <span>
          Transaction Pending
          <br />
          <a
            className="blue text-sm mt-2"
            href={`https://testnet.bscscan.com/tx/${tx.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Bscscan
          </a>
        </span>
      ),
      { position: "top-right" }
    );
    await tx.wait();
    toast.dismiss(id);
    toast.success("Transaction Successful", { position: "top-right" });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const allowanceAnyToken = async (address, caller, decimal) => {
  try {
    let localContract = new ethers.Contract(
      String(address),
      erc20_abi,
      provider
    );
    let allowance = await localContract.allowance(caller, launcher_contract);
    return ethers.utils.formatUnits(allowance, Number(decimal));
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const whitelistUser = async (
  address,
  amount,
  decimal,
  saleId,
  signer
) => {
  let contract = new ethers.Contract(launcher_contract, launcher_abi, signer);
  try {
    let tx = await contract.whitelistUser(
      saleId,
      address,
      ethers.utils.parseUnits(amount, Number(decimal))
    );
    let id = toast.loading(
      (t) => (
        <span>
          Transaction Pending
          <br />
          <a
            className="blue text-sm mt-2"
            href={`https://testnet.bscscan.com/tx/${tx.hash}`}
            target="_blank"
            rel="noreferrer"
          >
            View on Bscscan
          </a>
        </span>
      ),
      { position: "top-right" }
    );
    await tx.wait();
    toast.dismiss(id);
    toast.success("Transaction Successful", { position: "top-right" });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getReserveInfo = async (user, poolId) => {
  try {
    let data = await launcherContract.allocation(poolId, user);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getStakingIdwithTokenSymbol = async () => {
  try {
    let count = await getPoolCount();
    let array = [];

    for (let i = 0; i < Number(count); i++) {
      var res = await getPoolInfo(i + 1);
      let stakingToken = res.stakingToken;
      let tokenSymbol = await getTokenSymbol(stakingToken);
      array.push({
        symbol: tokenSymbol,
        id: i + 1,
        address: stakingToken,
      });
    }

    return array;
  } catch (e) {
    console.error(e);
  }
};

export const getSaleData = async (address) => {
  let contract = new ethers.Contract(address, launcher_abi, provider);
  let data = await contract.getTotalSalesData();
  return data;
};

export const setStackingContract = async (address, signer) => {
  let contract = new ethers.Contract(address, launcher_abi, signer);
  await contract.setStakingContract(
    "0xe5850b0BF0024C217555Bf50cF279513Ce457B43"
  );
  await contract.setOracleContract(
    "0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526"
  );
  await contract.setTierLevel(
    [
      ethers.utils.parseEther("4999"),
      ethers.utils.parseEther("5000"),
      ethers.utils.parseEther("25000"),
      ethers.utils.parseEther("50000"),
      ethers.utils.parseEther("100000"),
    ],

    [
      ethers.utils.parseEther("0"),
      ethers.utils.parseEther((25 / 0.035).toString()), //0.003 -> 1 //25 - ?
      ethers.utils.parseEther((150 / 0.035).toString()), // 150 / 0.035
      ethers.utils.parseEther((300 / 0.035).toString()),
      ethers.utils.parseEther((700 / 0.035).toString()),
    ]
  );
};
