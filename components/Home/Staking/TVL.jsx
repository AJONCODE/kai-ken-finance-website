import React from "react";
import { getTvl } from "../../helpers/utils";

export default class TVL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tvl: "0.00"
        }
    }

    componentDidMount = () => {
        this.fetchTvl();
    }

    fetchTvl = async () => {
       let tvl = await getTvl();
       this.setState({
           tvl
       });
    }

    render() {
        const {tvl} = this.state;
        return(
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-5xl font-medium mt-12 font-[game]">Staking Pool</h1>
                <div className="bg-gray pr-12 pl-12 pt-4 pb-4 rounded-lg">
                    <h3 className="text-center">{parseFloat(tvl).toFixed(3)} $$$$</h3>
                    <p className="text-center pt-2">TVL</p>
                </div>
            </div>
        );
    }
}