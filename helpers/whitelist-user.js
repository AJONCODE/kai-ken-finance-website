import React, { useContext } from "react";
import {
  allowanceAnyToken,
  approveAnyToken,
  createProject,
  whitelistUser,
} from "../../helpers/launcher-utils";
import { ethers } from "ethers";

class CreateProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whitelisting: false,
      saleId: "",
      decimal: "18",
      userAddress: "",
      tokenAmount: "",
    };
  }

  whitelist = async () => {
    const { saleId, decimal, userAddress, tokenAmount } = this.state;
    const { signer } = this.props;
    if (saleId && decimal && userAddress && tokenAmount) {
      this.setState({ whitelisting: true });
      await whitelistUser(userAddress, tokenAmount, decimal, saleId, signer);
      this.setState({ whitelisting: false });
    }
  };

  render() {
    const { saleId, decimal, userAddress, tokenAmount, whitelisting } =
      this.state;
    return (
      // this.props.address !== "0xA69a3A8C240C4d6033C87C6DDd1e897A258E3B07" ?
      this.props.address !== this.props.address ? null : (
        <div className="container bg-gray p-12">
          <h1 className="text-3xl mb-4">Whitelist a new user</h1>
          <p className="mb-4">Add a new user to the sale</p>
          <div className="mt-8">
            <p className="mb-4 text-sm">Token Decimal</p>
            <input
              className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
              placeholder="Sale Token Decimal"
              value={decimal}
              onChange={(e) => {
                this.setState({ decimal: e.target.value });
              }}
            />
          </div>
          <div className="mt-8">
            <p className="mb-4 text-sm">Project Info</p>
            <input
              className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
              placeholder="Whitelist Sale Id"
              value={saleId}
              onChange={(e) => {
                this.setState({ saleId: e.target.value });
              }}
            />
            <input
              className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
              placeholder="Whitelist User Address"
              value={userAddress}
              onChange={(e) => {
                this.setState({ userAddress: e.target.value });
              }}
            />
            <input
              className="p-3 mb-5 w-full rounded-xl outline:none bg-primary text-gray-100"
              placeholder="Whitelist Amount"
              value={tokenAmount}
              onChange={(e) => {
                this.setState({ tokenAmount: e.target.value });
              }}
            />
          </div>
          <div className="flex">
            <button
              onClick={() => this.whitelist()}
              disabled={whitelisting}
              className="blue-button mt-6 w-48 p-3 rounded-xl"
            >
              {whitelisting ? "Whitelisting User..." : "Whitelist User"}
            </button>
          </div>
        </div>
      )
    );
  }
}

export default CreateProject;
