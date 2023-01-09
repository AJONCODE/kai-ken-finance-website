import React from "react";
import Image from "next/image";
import Link from "next/link";
import Countdown from "../../Countdown";
import { saleInfo } from "../../../helpers/launcher-utils";
import { ethers } from "ethers";

export default class VerticalCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sold: "0.00",
    };
  }

  componentDidMount = async () => {
    let data = await saleInfo(Number(this.props.info.project_id));
    this.setState({
      sold: ethers.utils.formatUnits(data?.totalSold, this.props.info.decimal),
    });
  };

  render() {
    const { info } = this.props;
    const { sold } = this.state;
    //const src = `https://dry-badlands-06095.herokuapp.com${info.cover_image.data.attributes.url}`;
    return (
      <div className="grid grid-row lg:grid-cols-10 bg-gray mt-16 rounded-3xl p-6 gap-6">
        <div className="col-span-3">
          <Image
            className="rounded-xl object-scale-down"
            src={this.props.info.cover_image}
            alt="project-banner"
            layout="responsive"
            width={400}
            height={400}
          />
          <div className="mt-6">
            {Number(Date.now() / 1000) > Number(info.public_sale_end_time) ? (
              <p className="text-center font-medium text-xl text-red">
                Sale Completed
              </p>
            ) : Number(Date.now() / 1000) < Number(info.stake_start_time) ? (
              <>
                <p className="mb-4 text-center">Token Sale Starts in </p>
                <Countdown endTime={Number(info.stake_start_time)} />
              </>
            ) : (
              <>
                <p className="mb-4 text-center">Token Sale Ends in </p>
                <Countdown endTime={Number(info.public_sale_end_time)} />
              </>
            )}
          </div>
        </div>
        <div className="col-span-7">
          <h1 className="text-4xl font-semibold">{info.name}</h1>
          <p className="mt-4">{info.Description}</p>
          <div className="flex flex-row justify-between align-center mt-6">
            <h1>Sale Completion</h1>
            <h1 className="blue">
              {parseFloat(sold / info.total_sale).toFixed(4) * 100}%
            </h1>
          </div>
          <ProgressBar
            progressPercentage={
              parseFloat(sold / info.total_sale).toFixed(4) * 100
            }
          />
          <div className="flex flex-row justify-between align-center mt-6">
            <span></span>
            <h1 className="blue">
              {sold} {info.Ticker} out of {info.total_sale} {info.Ticker}
            </h1>
          </div>
          <div className="mt-12">
            <Link href={`/projects/${this.props.id}`} passHref>
              <button className="filter drop-shadow-md md:mt-10 pt-3 pb-3 pl-14 pr-14 rounded-full blue-button font-bold">
                {Number(Date.now() / 1000) > Number(info.start_date) &&
                Number(Date.now() / 1000) < Number(info.end_date)
                  ? "Participate Now"
                  : "Know More"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="h-3 border-2 rounded w-full bg-gray-300 mt-3">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full bg-blue`}
      ></div>
    </div>
  );
};
