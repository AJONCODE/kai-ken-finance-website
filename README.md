## Setps to deploy smart contracts

1. Deploy 4 contracts (Staking,Meta kickz ERC20,Factory).
2. Create a Staking Pool of Meta kickz. (Get the Address of Staking Pool) Reward Token and Stake Token are Meta Kickz ERC20 token address
3. Deploy Sale Contract using admin portal (Creates a new project).
4. Set the Staking token address for the newly created project on step 3.(Currently its hardcoded in the code)
5. Set the Oracle contract address for the newly created project.(Currently its hardcoded in the code)
6. Set the Tier level for the newly created project.(Currently its hardcoded in the code)
   
   //TODO :: Figure out how to read this values dynamically or configration of the Tiers in DB
   `[ ethers.utils.parseEther("4999"), ethers.utils.parseEther("5000"), ethers.utils.parseEther("25000"), ethers.utils.parseEther("50000"), ethers.utils.parseEther("100000"), ],  [
        ethers.utils.parseEther("0"),
      ethers.utils.parseEther((25 / 0.035).toString()), //0.003 -> 1 //25 - ?
      ethers.utils.parseEther((150 / 0.035).toString()), // 150 / 0.035
      ethers.utils.parseEther((300 / 0.035).toString()),
      ethers.utils.parseEther((700 / 0.035).toString()),
    ]`

## NOTES : Tier values should be given in terms of token. Formula to get the token is Tier doaller/baseprice
