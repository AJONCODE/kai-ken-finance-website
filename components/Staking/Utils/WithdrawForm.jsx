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
    if (
      this.props.address !== newProps.address ||
      this.props.refresh !== newProps.refresh ||
      this.props.signer !== newProps.signer
    ) {
      this.fetchInfo();
    }
  };

  withdraw = () => {
    const { signer } = this.props;
    if (!signer) {
      toast.error("Please connect your wallet to approve", {
        position: "top-right",
      });
    } else {
      if (Number(this.state.claimable) <= 0) {
        toast.error("Stake tokens to start generating yield", {
          position: "top-right",
        });
        return;
      }
      this.setState({ transacting: true }, async () => {
        let result = await claimToken(
          this.props.poolId,
          this.props.signer,
          true
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
    let data = await getTotalClaimable(this.props.poolId, this.props.signer);
    this.setState({
      claimable: data,
    });
  };

  render() {
    const { claimable, transacting } = this.state;
    return (
      <form className="mt-3 pb-1 px-2 pr-1 rounded-full flex flex-col justify-center items-center w-1/2">
        <input
          className="pt-4 pl-2 pb-4 md:pl-4 md:pr-2 w-full h-[45px] focus:outline-none text-white border border-[#5F5C65] bg-primary-black rounded-[5px] font-Poppins text-sm"
          placeholder={`Withdraw: 0.00 $$$$`}
          disabled
          value={claimable}
          type="text"
        />
        <button
          className="mt-3 w-full h-[36px] border border-white text-white font-regular font-Poppins text-sm rounded-[5px]"
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
            "Withdraw $$$$"
          )}
        </button>
      </form>
    );
  }
}
