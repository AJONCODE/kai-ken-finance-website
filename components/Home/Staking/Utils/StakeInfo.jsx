import { ethers } from "ethers";
import react from "react";
import { getPoolInfo } from "../../../helpers/utils";

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
    let data = await getPoolInfo("4");

    this.setState({
      staked: ethers.utils.formatEther(data.totalStaked),
      apy: ethers.utils.formatUnits(data.yieldPerSecond, 2),
      token_cost: "1.0",
    });
  };

  render() {
    const { staked, apy, token_cost } = this.state;
    return (
      <div className="grid grid-cols-4 gap-4 mt-10">
        <div className="bg-primary p-4 rounded-xl">
          <h3 className="text-center">{parseFloat(apy).toFixed(2)} %</h3>
          <p className="text-center">APY</p>
        </div>
        <div className="bg-primary p-4 rounded-xl">
          <h3 className="text-center">{parseFloat(staked).toFixed(3)}</h3>
          <p className="text-center">Total Staked</p>
        </div>
        <div className="bg-primary p-4 rounded-xl">
          <h3 className="text-center">$ {parseFloat(token_cost).toFixed(3)}</h3>
          <p className="text-center">Cost of Token</p>
        </div>
        <div className="bg-primary p-4 rounded-xl">
          <h3 className="text-center">
            $ {parseFloat(Number(staked) * Number(token_cost)).toFixed(3)}
          </h3>
          <p className="text-center">Total Lock Value</p>
        </div>
      </div>
    );
  }
}
