import { ethers } from "ethers";
import react from "react";
import { getPoolInfo, getTvl } from "../../../helpers/utils";

export default class StakeInfo extends react.Component {
  constructor(props) {
    super(props);

    this.state = {
      staked: "0",
      apy: "0",
      token_cost: "0",
    };
  }

  componentDidMount = () => {
    this.fetchInfo();
  };

  componentDidUpdate = (newProps) => {
    if (this.props.refresh !== newProps.refresh) {
      this.fetchInfo();
    }
  };

  fetchInfo = async () => {
    let data = await getPoolInfo(this.props.poolId);
    console.log(ethers.utils.formatEther(data.totalStaked));
    let tvl = await getTvl();
    this.setState({
      staked: ethers.utils.formatEther(data.totalStaked),
      apy: ethers.utils.formatUnits(data.yieldPerSecond, 2),
      token_cost: "1.0",
      tvl: tvl,
    });
  };

  render() {
    const { staked, apy, token_cost, tvl } = this.state;
    return (
      <div className="flex flex-row mt-10 w-full gap-x-5 gap-y-5 h-40">
        <div className="flex flex-1 bg-cards-bg p-4 rounded-xl border border-staking-border flex-col justify-center">
          <p className="text-center font-Poppins font-regular text-lg text-white">APY</p>
          <h3 className="pt-1 text-center font-Poppins font-bold text-3xl align-middle">{parseFloat(apy).toFixed(2)} %</h3>
        </div>
        <div className="flex flex-1 bg-cards-bg p-4 rounded-xl border border-staking-border flex-col justify-center">
          <p className="text-center font-Poppins font-regular text-lg text-white">Total Staked</p>
          <h3 className="pt-1 text-center font-Poppins font-bold text-3xl align-middle">{parseFloat(tvl).toFixed(3)}</h3>
        </div>
        <div className="flex flex-1 bg-cards-bg p-4 rounded-xl  border border-staking-border flex-col justify-center">
          <p className="text-center font-Poppins font-regular text-lg text-white">Cost of Token</p>
          <h3 className="pt-1 text-center font-Poppins font-bold text-3xl align-middle">$ {parseFloat(token_cost).toFixed(3)}</h3>
        </div>
        <div className="flex flex-1 bg-cards-bg p-4 rounded-xl  border border-staking-border flex-col justify-center">
          <p className="text-center font-Poppins font-regular text-lg text-white">TVL</p>
          <h3 className="pt-1 text-center font-Poppins font-bold text-3xl align-middle">
            $ {parseFloat(Number(tvl) * Number(token_cost)).toFixed(3)}
          </h3>
        </div>
      </div>
    );
  }
}
