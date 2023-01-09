import toast from "react-hot-toast";
const ethers = require("ethers");
let provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
let revol_abi = require("./abi/revol.json");
let staking_abi = require("./abi/staking.json");
/*
let staking_contract = "0xf6551397fA78d925Fa6bf3008B9197C50Dfb923E";
let revol_token = "0xdcbe5ff5a685673ad91ee2c783361bc2f1350809";
let busd_token = "0x6ce8da28e2f864420840cf74474eff5fd80e65b8";
let launcher_contract = "0xD14443A279a2Bc56749C559f4099d95243fd7558";
*/
// let staking_contract = "0xA964Eb3fEE07251296E7893209c7B3FdEfA09998";
// let revol_token = "0xf653e5819f40c6ea9f61594949b12fd5bf9853fa";
// let busd_token = "0xb2216f8Eb5345566e9320fa88A83922055A61b2B";
// let launcher_contract = "0xC78dEBa59D3193294B7F7e2C30E45a396060F22c";

let staking_contract = "0xe5850b0BF0024C217555Bf50cF279513Ce457B43";
let revol_token = "0x2B924EF7706B2d2fe8A1356d40f16aDAFC1B241b";
let busd_token = "0xf5c678f540d684208499d1c2babdf993b9b46a41";
let launcher_contract = "0x5AA5C2FbC942b393a38c9697563c8E675e99E98A";
let factory_contract = "0xF51624fdEF3243DaE53286b47651A143817a1Ac3";

let revolContract = new ethers.Contract(revol_token, revol_abi, provider);
let busdContract = new ethers.Contract(busd_token, revol_abi, provider);
let stakingContarct = new ethers.Contract(
  staking_contract,
  staking_abi,
  provider
);

export const getBalance = async (address) => {
  let balance = await revolContract.balanceOf(address);
  return balance;
};

export const getAllowance = async (address) => {
  let allowance = await revolContract.allowance(address, staking_contract);
  return allowance;
};

export const getBusdAllowance = async (address, laddress) => {
  let allowance = await busdContract.allowance(address, laddress);
  return ethers.utils.formatEther(allowance);
};

export const getTvl = async () => {
  let tvl = await revolContract.balanceOf(staking_contract);
  return ethers.utils.formatEther(tvl);
};

export const getPoolInfo = async (poolId) => {
  let data = await stakingContarct.pool(poolId);
  return data;
};

export const getStakeInfo = async (user, poolId) => {
  let data = await stakingContarct.stakeInfo(user, poolId);

  return data;
};

export const getPoolCount = async () => {
  let data = await stakingContarct.poolCount();

  return data;
};

export const getTotalClaimable = async (poolId, signer) => {
  try {
    let localContract = new ethers.Contract(
      staking_contract,
      staking_abi,
      signer
    );
    let stakeInfo = await localContract.stakeInfo(
      await signer.getAddress(),
      poolId
    );
    let unclaimedInfo = await localContract.fetchUnclaimed(poolId);
    let stakeAmount = ethers.utils.formatEther(stakeInfo.amount);
    let unclaimedAmount = ethers.utils.formatEther(unclaimedInfo);
    return Number(stakeAmount) + Number(unclaimedAmount);
  } catch (err) {
    return 0;
  }
};

export const getUnclaimed = async (poolId, signer) => {
  try {
    let localContract = new ethers.Contract(
      staking_contract,
      staking_abi,
      signer
    );
    let unclaimedInfo = await localContract.fetchUnclaimed(poolId);
    let unclaimedAmount = ethers.utils.formatEther(unclaimedInfo);
    return Number(unclaimedAmount);
  } catch (err) {
    return 0;
  }
};

export const approveToken = async (amount, signer) => {
  try {
    let localContract = new ethers.Contract(revol_token, revol_abi, signer);
    let tx = await localContract.approve(
      staking_contract,
      ethers.utils.parseEther(amount)
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

export const approveBUSD = async (address, amount, signer) => {
  try {
    let localContract = new ethers.Contract(busd_token, revol_abi, signer);
    let tx = await localContract.approve(
      address,
      ethers.utils.parseEther(amount)
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

export const stakeToken = async (poolId, amount, signer) => {
  try {
    let localContract = new ethers.Contract(
      staking_contract,
      staking_abi,
      signer
    );
    let tx = await localContract.stakeToken(
      poolId,
      ethers.utils.parseEther(amount)
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
    toast.success(`Successfully staked ${amount} tokens`, {
      position: "top-right",
    });
    return true;
  } catch (err) {
    toast.error(`Error Staking: ${err.message}`, { position: "top-right" });
    return false;
  }
};

export const claimToken = async (poolId, signer, isWithdraw) => {
  try {
    let localContract = new ethers.Contract(
      staking_contract,
      staking_abi,
      signer
    );

    let tx = await localContract.claimToken(poolId, isWithdraw);
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
    toast.success(
      isWithdraw
        ? `You've withdrawn your staked tokens successfully`
        : `You've claimed your yielded tokens successfully`,
      { position: "top-right" }
    );
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
