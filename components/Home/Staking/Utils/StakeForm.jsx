import { ethers } from "ethers";
import React from "react";
import {
  approveToken,
  getAllowance,
  getBalance,
  stakeToken,
} from "../../../helpers/utils";

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
  };

  stake = () => {
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
      <form className="filter bi-primary-black shadow-lg mt-10 pt-1 pb-1 pl-1 pr-1 rounded-full w-max">
        <input
          className="pt-4 pb-4 md:pl-4 md:pr-2 rounded-full form-width focus:outline-none bg-primary bg-staking-blue-900 text-white"
          placeholder={`Balance: ${balance} $$$$`}
          required
          value={stakeAmount}
          onChange={(e) => this.setState({ stakeAmount: e.target.value })}
          type="text"
        />
        <button
          className="filter drop-shadow-lg pt-4 pb-4 pl-4 pr-4 md:pl-14 md:pr-14 rounded-full blue-button font-bold"
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
            "Stake"
          )}
        </button>
      </form>
    );
  }
}
