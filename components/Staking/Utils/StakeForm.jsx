import { ethers } from "ethers";
import React from "react";
import {
  approveToken,
  getAllowance,
  getBalance,
  stakeToken,
} from "../../../helpers/utils";
import toast from "react-hot-toast";

export default class StakeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0.0,
      approving: false,
      allowance: 0.0,
      stakeAmount: "",
      transacting: false,
    };
  }

  componentDidMount = () => {
    this.fetchInfo();
  };

  componentDidUpdate = (newProps) => {
    if (this.props.address !== newProps.address) {
      this.fetchInfo();
    }
  };

  transact = () => {
    if (Number(this.state.stakeAmount) > Number(this.state.allowance)) {
      this.approve();
    } else {
      this.stake();
    }
  };

  approve = () => {
    const { signer } = this.props;
    if (!signer) {
      toast.error("Please connect your wallet to approve", {
        position: "top-right",
      });
    } else {
      this.setState({ transacting: true }, async () => {
        let result = await approveToken(
          this.state.stakeAmount,
          this.props.signer
        );
        if (result) {
          await this.fetchInfo();
          this.props.pokeRefresh();
          this.setState({ transacting: false });
        } else {
          this.setState({ transacting: false });
        }
      });
    }
  };

  stake = () => {
    const { signer } = this.props;
    if (!signer) {
      toast.error("Please connect your wallet to approve", {
        position: "top-right",
      });
    } else {
      this.setState({ transacting: true }, async () => {
        let result = await stakeToken(
          this.props.poolId,
          this.state.stakeAmount,
          this.props.signer
        );
        if (result) {
          await this.fetchInfo();
          this.props.pokeRefresh();
          this.setState({ transacting: false });
        } else {
          this.setState({ transacting: false });
        }
      });
    }
  };

  fetchInfo = async () => {
    if (this.props.address) {
      let balance = await getBalance(this.props.address);
      this.setState({ balance: ethers.utils.formatEther(balance) });
      let allowance = await getAllowance(this.props.address);
      this.setState({ allowance: ethers.utils.formatEther(allowance) });
    }
  };

  render() {
    const { balance, allowance, stakeAmount, transacting } = this.state;

    return (
      <form className="mt-6 pt-1 px-2 rounded-full flex flex-col justify-center items-center w-full">
        <input
          className="pt-4 pb-4 pl-2 md:pl-4 md:pr-2 w-full h-[45px] focus:outline-none text-white placeholder:text-placeholder-white border border-[#5F5C65] bg-[#252525] rounded-[5px] font-Poppins text-sm"
          placeholder={`Provide Token Amount E.g. 500`}
          required
          value={stakeAmount}
          onChange={(e) => this.setState({ stakeAmount: e.target.value })}
          type="text"
        />
        <button
          className="mt-3 w-full h-[36px] bg-gradient-to-r from-primary-red to-comp-orange text-white font-bold rounded-[5px] text-sm"
          onClick={(e) => {
            e.preventDefault();
            this.transact();
          }}
          disabled={transacting}
        >
          {transacting ? (
            <>
              <p>Pending...</p>
            </>
          ) : Number(stakeAmount) > allowance ? (
            "Approve"
          ) : (
            "Stake $$$$"
          )}
        </button>
      </form>
    );
  }
}
