import React from "react";
import Image from "next/image";
import PANCAKE_ICON from "../../assets/pcs_link_ico.png"
import StakeForm from "./Utils/StakeForm";
import WithdrawForm from "./Utils/WithdrawForm";
import StakeInfo from "./Utils/StakeInfo";
import ClaimForm from "./Utils/ClaimForm";
import { getBalance } from "../../helpers/utils";
import { ethers } from "ethers";

export default class StakeInfoCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      refreshInfo: false,
      width: 0,
      balance: 0.0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.fetchInfo();
  }

  componentDidUpdate = (newProps) => {
    if (
      this.props.address !== newProps.address ||
      this.props.refresh !== newProps.refresh ||
      this.props.signer !== newProps.signer
    ) {
      this.fetchInfo();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => this.setState({ width: window.innerWidth });

  refresh = () => this.setState({ refreshInfo: !this.state.refreshInfo });

  fetchInfo = async () => {
    if (this.props.address) {
      let balance = await getBalance(this.props.address);
      this.setState({ balance: ethers.utils.formatEther(balance) });
    }
  };

  render() {
    const { visible, refreshInfo, width, balance } = this.state;
    return (
      <div className="flex flex-col rounded-2xl w-[985]">
        <div className="flex flex-row ">
            <StakeInfo refresh={refreshInfo} {...this.props} />
        </div>
        <div className="flex flex-row h-[440px]">
          <div className="flex flex-2 flex-col bg-cards-bg w-3/5 mt-4 border border-staking-border pt-6 pb-10 pl-6 pr-6 rounded-2xl">
            <div className=" flex flex-row flex-3">
              <div className="pl-2 flex w-4/5 flex-2 flex-col">
                <h2 className="text-lg font-bold font-Poppins ">$$$$ Token</h2>
                <p className="text-base font-regular font-Poppins text-white ">Stake $$$$ Tokens to participate in IDOs</p>
              </div>
              <div className="flex w-1/5 flex-col flex-1 justify-end px-2">
                <h2 className="text-base font-regular font-Poppins text-right">Your Balance</h2>
                <div className="flex flex-row justify-end">
                  <p className="text-lg font-bold font-Poppins text-white overflow-hidden">{parseFloat(balance).toFixed(2)}</p>
                  <p className="text-lg font-bold font-Poppins text-white">$$$$</p>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col block pt-2`}
            >
              <div className="flex justify-center">
                <StakeForm
                  {...this.props}
                  refresh={refreshInfo}
                  pokeRefresh={this.refresh}
                />
              </div>
              <div className="flex flex-row justify-between pr-1">
                <ClaimForm
                  {...this.props}
                  refresh={refreshInfo}
                  pokeRefresh={this.refresh}
                />
                <WithdrawForm
                  {...this.props}
                  refresh={refreshInfo}
                  pokeRefresh={this.refresh}
                />
              </div>
            </div>

            <div className=" mt-16 pr-0 border border-[#585858] ml-[-25px] w-[768px]"></div>
            <div className="flex flex-row justify-center content-center my-2">
                <a className="text-white text-xs font-regular font-Poppins">Buy $$$$ on Uniswap</a>
                <Image src={PANCAKE_ICON} width={16} height={16}/>
            </div>
          </div>
          <div className="flex flex-1 w-1/3 flex-col bg-cards-bg ml-4 mt-4 pl-6 border border-staking-border rounded-2xl">
            <h2 className="text-lg font-bold font-Poppins pt-6 pl-4 ">AptosLauncher Tier Information</h2>
            <p className="text-base font-regular font-Poppins pl-4 pr-16 pt-3">AptosLauncher will showcase a fixed tier system based on the number of tokens staked.</p>
            <div className="px-4 pt-6">
              <p className="text-sm font-regular font-Poppins px-0 pt-1 pr-8">Tier 1 is <span className="bg-clip-text font-Poppins font-bold text-sm text-transparent bg-gradient-to-r from-primary-red to-comp-orange">2000 $$$$</span> required before sale to unlock Economy tier</p>
              <p className="text-sm font-regular font-Poppins px-0 pt-1 pr-8">Tier 2 is <span className="bg-clip-text font-Poppins font-bold text-sm text-transparent bg-gradient-to-r from-primary-red to-comp-orange">20,000 $$$$</span> required before sale to unlock Business class tier</p>
              <p className="text-sm font-regular font-Poppins px-0 pt-1 pr-8">Tier 3 is <span className="bg-clip-text font-Poppins font-bold text-sm text-transparent bg-gradient-to-r from-primary-red to-comp-orange">50,000 $$$$</span> required before sale to unlock First class tier</p>
              <p className="text-sm font-regular font-Poppins px-0 pt-1 pr-8">Tier 4 is <span className="bg-clip-text font-Poppins font-bold text-sm text-transparent bg-gradient-to-r from-primary-red to-comp-orange">100,000 $$$$</span> required before sale to unlock Executive first class tier</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
