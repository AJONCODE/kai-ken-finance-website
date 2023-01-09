import React from "react";
import METK_ICON from "../../assets/revol.svg";
import StakeForm from "./Utils/StakeForm";
import WithdrawForm from "./Utils/WithdrawForm";
import StakeInfo from "./Utils/StakeInfo";
import ClaimForm from "./Utils/ClaimForm";

export default class StakeInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            refreshInfo: false
        }
    }

    refresh = () => this.setState({refreshInfo: !this.state.refreshInfo})

    render() {
        const {visible, refreshInfo} = this.state;
        return(
            <div className="bg-gray mt-20 pt-10 pb-10 pl-4 pr-4 rounded-3xl">
                <div className="grid grid-cols-10">
                    <img src={REVOL_ICON} alt="revol" />
                    <div className="col-span-8">
                        <h2 className="text-2xl font-medium">$$$$ Token</h2>
                        <p>Stake $$$$ Tokens to participate in IDOs</p>
                    </div>
                    <div className="col-span-1 hover:cursor-pointer" onClick={() => this.setState({visible: !this.state.visible})}>
                        {visible ? 
                          <svg stroke="#ffffff" fill="#ffffff" viewBox="0 0 448 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                        : <svg stroke="#ffffff" fill="#ffffff" viewBox="0 0 448 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
                        }
                    </div>
                </div>
                <StakeInfo refresh={refreshInfo} />
                <div className={`grid grid-cols-3 mt-10 gap-10 ${visible ? 'block': 'hidden'}`}>
                <StakeForm {...this.props} refresh={refreshInfo} pokeRefresh={this.refresh} />     
                <WithdrawForm {...this.props} refresh={refreshInfo} pokeRefresh={this.refresh} />
                <ClaimForm {...this.props} refresh={refreshInfo} pokeRefresh={this.refresh} />    
                </div>
            </div>
        )
    }
}