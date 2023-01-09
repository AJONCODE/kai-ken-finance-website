import { ethers } from "ethers";
import React from "react";
import StakeCard from "../components/Staking/StakeCard";
import TVL from "../components/Staking/TVL";
import Loader from "../components/util/Loader";
import { getTotalSales } from "../helpers/launcher-utils";
import { getPoolCount } from "../helpers/utils";

export default class Staking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalsale: "",
      totalPool: 0,
      fetchingInfo: true,
    };
  }

  componentDidMount() {
    this.getTotalPools();
  }

  /**
   * Get he total Pools from the blockchain
   *
   */
  getTotalPools = async () => {
    let res = await getPoolCount();
    this.setState({
      totalPool: Number(res),
      fetchingInfo: false,
    });
  };

  render() {
    return (
      <div className="bg-primary-black container mx-auto pt-[112px]">
        <TVL />
        {this.state.fetchingInfo ? (
          <Loader />
        ) : (
          [...Array(this.state.totalPool)].map((x, i) => (
            <StakeCard key={i} {...this.props} poolId={i + 1} />
          ))
        )}
      </div>
    );
  }
}
