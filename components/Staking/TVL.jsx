import React from "react";
import { getTvl } from "../../helpers/utils";

export default class TVL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tvl: "0.00",
    };
  }

  componentDidMount = () => {
    this.fetchTvl();
  };

  fetchTvl = async () => {
    let tvl = await getTvl();
    this.setState({
      tvl,
    });
  };

  render() {
    const { tvl } = this.state;
    return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-primary-black">
        <h1 className="text-base mt-12 font-Poppins font-bold">IDO Staking on AptosLauncher</h1>
        {/* <div className="bg-gray pr-12 mt-8 pl-12 pt-4 pb-4 rounded-lg text-light">
                    <h3>coming soon</h3></div> */}
        {/* <div className="bg-staking-blue-900 bg-tvl pr-12 mt-8 pl-12 pt-4 pb-4 rounded-lg">
          <h3 className="text-center">{parseFloat(tvl).toFixed(3)} $METK</h3>
          <p className="text-center pt-2">TVL</p>
        </div> */}
      </div>
    );
  }
}
