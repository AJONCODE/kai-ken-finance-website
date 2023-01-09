import React from "react";
import { claimToken, getUnclaimed } from "../../../helpers/utils";
import toast from "react-hot-toast";

export default class ClaimForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            approving: false,
            claimable: "",
            transacting: false,
        }
    }

    componentDidMount = () => {
        this.fetchInfo();
    }

    componentDidUpdate = (newProps) => {
        if(this.props.address !== newProps.address || this.props.refresh !== newProps.refresh) {
            this.fetchInfo();
        }
    }

    claim = () => {
        if(Number(this.state.claimable) <= 0) {
            toast.error("Stake tokens to start generating yield", {position:"top-right"});
        }
        this.setState({transacting: true}, async () => {
            let result = await claimToken(this.props.poolId, this.props.signer, false);
            if(result) {
                await this.fetchInfo();
                this.props.pokeRefresh();
                this.setState({transacting: false});
            } else {
                this.setState({transacting: false});
            }
        }); 
    }

    fetchInfo = async () => {
        if(this.props.address) {
           let data = await getUnclaimed("1",this.props.signer)
           this.setState({
             claimable: data
           })
        }
    }
    
    render() {
        const {claimable, transacting} = this.state;
        return(
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
                    onClick={(e) =>
                        {
                            e.preventDefault();
                            this.claim();
                        }
                    }
                    disabled={transacting}
                    >
                {transacting ? <><p>Pending...</p></> : "Claim"}
                </button>
            </form> 
        )
    }
}