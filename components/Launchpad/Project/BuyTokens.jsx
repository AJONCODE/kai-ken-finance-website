import { ethers } from "ethers";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import {
  buyWithBNB,
  buyWithBUSD,
  getAllocationPerStake,
  getReserveInfo,
  purchaseInfo,
  reservedBuyWithBNB,
  reservedBuyWithBUSD,
  saleInfo,
} from "../../../helpers/launcher-utils";
import { getBNBPrice } from "../../../helpers/oracle-utils";
import {
  approveBUSD,
  getBusdAllowance,
  getPoolInfo,
  getStakeInfo,
} from "../../../helpers/utils";
import Countdown from "../../Countdown";
import project_image from "../../../assets/project_image.png";

class BuyTokens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usd: "0.00",
      isPublic: true,
      reserved: false,
      info: null,
      fetchingInfo: true,
      xFactor: 0,
      stakeBought: "0",
      bnb: true,
      bnbPrice: "0",
      allowance: "0",
      tokens: "0.00",
      reserved: "0.00",
      projectId: null,
      allocatedToken: 0,
      saleover: false,
      buyDisabled: true,
      transacting: false,
    };
  }

  componentDidMount = async () => {
    const { projectId, data } = this.props;
    this.setState({
      projectId: projectId,
    });

    let info = await saleInfo(data.contract_address);

    let bnbPrice = await getBNBPrice();
    if (this.props.signer) {
      this.fetchStakeInfo(info.stakePoolId);
      this.fetchPurchaseInfo();
      this.fetchBusdAllowance();
    }
    this.setState({ info, fetchingInfo: false, bnbPrice });
    let currentTime = Math.floor(Date.now() / 1000);

    if (
      currentTime >= this.props.data.stake_start_time &&
      currentTime <= this.props.data.stake_end_time
    ) {
      this.setState({ isPublic: false, buyDisabled: false });
    } else if (
      currentTime >= this.props.data.public_sale_start_time &&
      currentTime <= this.props.data.public_sale_end_time
    ) {
      this.setState({ isPublic: true, buyDisabled: false });
    } else if (currentTime > this.props.data.public_sale_end_time) {
      this.setState({ saleover: true });
    } else {
      this.setState({ isPublic: false });
    }
  };

  componentDidUpdate = async (nextProps) => {
    const { info } = this.state;
    if (this.props.signer !== nextProps.signer && this.props.address && info) {
      this.fetchStakeInfo(info.stakePoolId);
      this.fetchPurchaseInfo();
      this.fetchBusdAllowance();
    }
  };

  inputChange = (value) => {
    const { bnbPrice, bnb, info } = this.state;

    if (Number(value) >= 0) {
      let output;
      if (bnb) {
        output =
          (Number(value) * Number(bnbPrice)) /
          Number(ethers.utils.formatUnits(info.costPerToken, 8));
      } else {
        output =
          Number(value) /
          Number(ethers.utils.formatUnits(info.costPerToken, 8));
      }
      this.setState({
        usd: value,
        tokens: output,
      });
    }
  };

  getLiveSaleType() {
    let currentTime = Math.floor(Date.now() / 1000);
    console.log(currentTime - Number(this.props.data.stake_start_time));
    console.log(Number(this.props.data.stake_start_time));

    if (currentTime < Number(this.props.data.stake_start_time)) {
      // this.setState({ isPublic: false });
      return this.renderSaleType("Stake Sale starts soon!!");
    } else if (
      currentTime >= Number(this.props.data.stake_start_time) &&
      currentTime <= Number(this.props.data.stake_end_time)
    ) {
      // this.setState({ isPublic: false });
      return this.renderSaleType("Stake Sale is Live");
    } else if (
      currentTime >= Number(this.props.data.stake_start_time) &&
      currentTime <= Number(this.props.data.public_sale_start_time)
    ) {
      //this.setState({ isPublic: true });
      return this.renderSaleType("Public Sale starts soon!!");
    } else if (
      currentTime >= Number(this.props.data.public_sale_start_time) &&
      currentTime <= Number(this.props.data.public_sale_end_time)
    ) {
      //this.setState({ isPublic: true });
      return this.renderSaleType("Public Sale is Live");
    } else {
      return this.renderSaleType("Sale is Over");
    }
  }

  fetchStakeInfo = async (poolId) => {
    let { data } = this.props;
    if (poolId > 0) {
      const { address } = this.props;
      let stakeInfo = await getStakeInfo(address, poolId);
      let poolData = await getPoolInfo(poolId);

      let totalAllocation = await getAllocationPerStake(
        data?.contract_address,
        stakeInfo?.amount
      );

      this.setState({
        allocatedToken: totalAllocation,
      });
      let percent =
        ethers.utils.formatEther(stakeInfo?.amount) /
        ethers.utils.formatEther(poolData?.totalStaked);
      this.setState({
        xFactor: Number(percent),
      });
    } else {
      const { address, projectId } = this.props;
      let data = await getReserveInfo(address, projectId);

      this.setState({
        reserved: ethers.utils.formatEther(data),
      });
    }
  };

  fetchPurchaseInfo = async () => {
    const { projectId, address } = this.props;
    // let data = await purchaseInfo(projectId, address);
    // this.setState({
    //   stakeBought: ethers.utils.formatEther(data),
    // });
  };

  fetchBusdAllowance = async () => {
    const { address } = this.props;

    const allowance = await getBusdAllowance(
      address,
      this.props.data.contract_address
    );

    this.setState({
      allowance: allowance,
    });
  };

  bnb = async (reserved) => {
    const { usd } = this.state;
    const { signer, projectId } = this.props;
    if (!signer) {
      toast.error("Please connect your wallet to buy tokens", {
        position: "top-right",
      });
    } else if (Number(usd) <= 0) {
      toast.error("Invalid Purchase Value", { position: "top-right" });
    } else {
      reserved
        ? await buyWithBNB(this.props.data.contract_address, usd, signer)
        : await reservedBuyWithBNB(
            this.props.data.contract_address,
            usd,
            signer
          );

      let info = await saleInfo(this.props.data.contract_address);
      this.setState({
        info,
      });
      if (this.props.address) {
        this.fetchStakeInfo(info.stakePoolId);
        this.fetchPurchaseInfo();
        this.fetchBusdAllowance();
      }
    }
  };

  approve_busd = () => {
    this.setState({ transacting: true }, async () => {
      const { usd } = this.state;
      const { signer } = this.props;
      if (!signer) {
        toast.error("Please connect your wallet to buy tokens", {
          position: "top-right",
        });
      } else if (Number(usd) <= 0) {
        toast.error("Invalid Purchase Value", { position: "top-right" });
      } else {
        let approve = await approveBUSD(
          this.props.data.contract_address,
          usd,
          signer
        );
        if (approve) {
          this.fetchBusdAllowance();
          this.setState({ transacting: false });
        }
        this.setState({ transacting: false });
      }
    });
  };

  busd = async (isPublic) => {
    const { usd } = this.state;

    const { signer, projectId } = this.props;
    if (!signer) {
      toast.error("Please connect your wallet to buy tokens", {
        position: "top-right",
      });
    } else if (Number(usd) <= 0) {
      toast.error("Invalid Purchase Value", { position: "top-right" });
    } else {
      isPublic
        ? await buyWithBUSD(this.props.data.contract_address, usd, signer)
        : await reservedBuyWithBUSD(
            this.props.data.contract_address,
            usd,
            signer
          );
      let info = await saleInfo(this.props.data.contract_address);
      let bnbPrice = await getBNBPrice();
      if (this.props.signer) {
        this.fetchStakeInfo(info.stakePoolId);
        this.fetchPurchaseInfo();
        this.fetchBusdAllowance();
      }
      this.setState({ info, fetchingInfo: false, bnbPrice });
      //clear form post submission
      this.setState({ tokens: "", usd: "" });
    }
  };

  renderSaleType(sale) {
    return (
      <div className="flex flex-row my-4">
        <div className=" bg-trans-brown border border-zinc-500 rounded  flex flex-row items-center  w-full p-3">
          <div className="relative ">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full  rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
            </span>
          </div>
          <div className="text-idos-gray ml-3   text-sm ">{sale}</div>
        </div>
      </div>
    );
  }

  render() {
    const {
      isPublic,
      usd,
      info,
      fetchingInfo,
      xFactor,
      stakeBought,
      bnb,
      allowance,
      tokens,
      reserved,
      allocatedToken,
    } = this.state;

    const { image, data, signer } = this.props;
    return (
      <div className="bg-[#FFFFFF1A] border border-[#848484] rounded-xl my-2 h-[620px] py-1 px-4 w-full relative border-1">
        {
          <>
            {fetchingInfo ? (
              <div className="h-full text-center flex items-center justify-center">
                {" "}
                <p>Fetching Information From Chain....</p>
              </div>
            ) : Number(Date.now() / 1000) > Number(data.end_date) ? (
              <div className="mt-4 text-center bg-primary p-4 rounded-lg">
                <p className="text-xl text-gray-100">The sale is finished</p>
                <p className="pt-3">Thank you for your participation</p>
              </div>
            ) : Number(Date.now() / 1000) < Number(data.start_date) ? (
              <div>
                <div className="mt-4 text-center">
                  <p className="text-xl pb-3">Sale Starts In</p>
                  <Countdown endTime={Number(data.start_date)} />
                </div>
              </div>
            ) : (
              <div>
                <h1 className="text-4xl font-semibold pb-4 mt-5">Buy Tokens</h1>
                <hr className="border-slate-700" />
                {this.getLiveSaleType()}
                <p className="pb-3">Buy With</p>
                <div className="grid grid-cols-2 gap-4 pb-5">
                  <button
                    className={`p-2 ${
                      bnb
                        ? "bg-gradient-to-r from-primary-red to-comp-orange rounded-md text-white"
                        : "blue-outline-button text-white"
                    } rounded-xl w-full`}
                    onClick={() => {
                      this.setState({ bnb: true }, () => {
                        this.inputChange(this.state.usd);
                      });
                    }}
                    disabled={this.state.buyDisabled}
                  >
                    BNB
                  </button>
                  <button
                    className={`p-2 ${
                      !bnb
                        ? "bg-gradient-to-r from-primary-red to-comp-orange rounded-md text-white"
                        : "blue-outline-button"
                    } rounded-xl w-full`}
                    onClick={() => {
                      this.setState({ bnb: false }, () => {
                        this.inputChange(this.state.usd);
                      });
                    }}
                    disabled={this.state.buyDisabled}
                  >
                    BUSD
                  </button>
                </div>
                <p className="pb-3">You Pay</p>
                <input
                  className="p-3 mb-3 w-full rounded-xl outline:none  bg-[#252525] inp-border text-white placeholder:text-placeholder-white"
                  placeholder={
                    this.state.bnb ? "Amount in BNB" : "Amount in BUSD"
                  }
                  value={usd}
                  onChange={(e) => this.inputChange(e.target.value)}
                  disabled={this.state.buyDisabled}
                />
                <p className="pb-3">You Get</p>
                <input
                  className="p-3 mb-3 w-full rounded-xl outline:none  bg-[#252525] inp-border text-white placeholder:text-placeholder-white"
                  placeholder="Token Amount"
                  value={Number(tokens).toLocaleString()}
                  onChange={(e) => this.outputChane({ usd: e.target.value })}
                  disabled={this.state.buyDisabled}
                />
                <p className="mb-3">
                  {isPublic ? "Tokens Left" : "Your Allocation Left"} :{" "}
                  {this.newMethod(
                    isPublic,
                    info,
                    reserved,
                    allocatedToken
                  ).toLocaleString()}
                </p>
                {!signer ? (
                  <button
                    className=" bg-gradient-to-r from-primary-red to-comp-orange rounded-md text-white font-bold w-full p-3 "
                    disabled
                  >
                    Wallet Not Connected
                  </button>
                ) : bnb ? (
                  <button
                    className="bg-gradient-to-r from-primary-red to-comp-orange rounded-md text-white w-full p-3"
                    onClick={() => this.bnb(isPublic)}
                    disabled={this.state.buyDisabled}
                  >
                    Buy with BNB
                  </button>
                ) : (
                  <div>
                    <button
                      disabled={
                        Number(usd) < Number(allowance) ||
                        this.state.buyDisabled ||
                        this.state.transacting
                      }
                      className="bg-gradient-to-r from-primary-red to-comp-orange rounded-md text-white w-full p-3  mb-3"
                      onClick={() => this.approve_busd()}
                    >
                      {this.state.transacting ? "Processing.." : "Approve BUSD"}
                    </button>
                    <br />
                    <button
                      disabled={
                        Number(usd) > Number(allowance) ||
                        this.state.buyDisabled
                      }
                      className="bg-gradient-to-r from-primary-red to-comp-orange rounded-md text-white w-full p-3 "
                      onClick={() => this.busd(isPublic)}
                    >
                      Buy with BUSD
                    </button>
                  </div>
                )}
                {this.state.saleover ? (
                  <div className="h-full top-0 w-[400px]  opacity-70 text-center flex  justify-center absolute">
                    {" "}
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </>
        }
      </div>
    );
  }

  newMethod(isPublic, info, reserved, allocatedToken) {
    return isPublic
      ? Number(ethers.utils.formatEther(info?.publicAllocated)).toLocaleString()
      : info?.whitelist
      ? reserved
      : allocatedToken !== 0
      ? Number(
          ethers.utils.formatEther(allocatedToken) -
            ethers.utils.formatEther(info?.totalSold)
        ).toLocaleString()
      : "Fetching...";
  }
}
export default BuyTokens;
