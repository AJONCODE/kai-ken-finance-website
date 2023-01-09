import React from "react";
import { claimToken, getTotalClaimable } from "../../../helpers/utils";
import toast from "react-hot-toast";
import { ethers } from "ethers";

export default class WithdrawForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      approving: false,
      claimable: "",
      transacting: false,
    };
  }

  componentDidMount = () => {
    this.fetchInfo();
  };

  componentDidUpdate = (newProps) => {
    this.fetchInfo();
  };

  withdraw = () => {
    if (Number(this.state.claimable) <= 0) {
      toast.error("Stake tokens to start generating yield", {
        position: "top-right",
      });
    }
    this.setState({ transacting: true }, async () => {
      let result = await claimToken(this.props.poolId, this.props.signer, true);
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
      let data = await getTotalClaimable(this.props.poolId, this.props.signer);

      this.setState({
        claimable: Number(ethers.utils.formatUnits(data, Number(18))).toFixed(
          3
        ),
      });
    }
  };

  render() {
    const { claimable, transacting } = this.state;
    return (
      <form className="filter bg-primary shadow-lg mt-10 pt-1 pb-1 pl-1 pr-1 rounded-full w-max">
        <input
          className="pt-4 pb-4 md:pl-4 md:pr-2 rounded-full form-width focus:outline-none bg-primary text-white"
          placeholder={`Withdraw: 0.00 $$$$`}
          disabled
          value={claimable}
          type="text"
        />
        <button
          className="filter drop-shadow-lg pt-4 pb-4 pl-4 pr-4 md:pl-14 md:pr-14 rounded-full blue-button font-bold"
          onClick={(e) => {
            e.preventDefault();
            this.withdraw();
          }}
          disabled={transacting}
        >
          {transacting ? (
            <>
              <p>Pending...</p>
            </>
          ) : (
            "Withdraw"
          )}
        </button>
      </form>
    );
  }
}
