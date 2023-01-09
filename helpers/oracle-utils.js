const ethers = require("ethers");
let provider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);
let oracle_abi = require("./abi/oracle.json");

let oracle_contract = "0x2514895c72f50d8bd4b4f9b1110f0d6bd2c97526";
let oracleContract = new ethers.Contract(oracle_contract, oracle_abi, provider);

export const getBNBPrice = async () => {
  let data = await oracleContract.latestRoundData();
  return ethers.utils.formatUnits(data[1], 8);
};
