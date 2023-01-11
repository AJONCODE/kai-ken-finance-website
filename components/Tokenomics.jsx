import Image from "next/image";
import tokenTotBG from "../assets/tokenTotBG-min.png";
import to1 from "../assets/to1.svg";
import to2 from "../assets/to2-min.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";

export default function TokenUtility() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    //setHeight(ref.current.clientHeight);
  }, []);

  const Bar = ({ title, perc }) => {
    return (
      <div className="flex md:m-8 m-4 md:w-14 w-12 rotate-6 flex-col align-center justify-items-start">
        <h1 className="mb-2 text-center text-xs w-10">{perc + " "} %</h1>
        <div className="border md:w-12 w-6 h-96  border-white md:p-2 p-1 bar-border flex  ">
          <div
            className="md:w-12 w-4 md:p-4 p-2 bg-bar mt-auto flex align-bottom justify-items-end "
            style={{ height: (perc * 1000) / 100 + "px" }}
          ></div>
        </div>
        <h1 className="md:w-14 wrap mt-2  text-xs w-8">{title}</h1>
      </div>
    );
  };
  const TokenCard = ({ icon, title, total }) => {
    return (
      <div className="m-8 mt-14 token-card relative">
        <div className="absolute -top-20 z-1 left-8">
          {/* <Image src={blurElipse} height={200} width={180} alt="" /> */}
        </div>
        <div className="relative bg-token-card w-64 h-44 flex align-middle text-center justify-center flex-col">
          <div className="absolute -top-4 z-10 left-24 z-100">
            <Image
              src={icon}
              height={60}
              width={60}
              alt=""
              className=" object-contain"
            />
          </div>
          <h1 className="mb-2 font-bold font-hanuman pt-8">{title}</h1>
          <h2>{total}</h2>
          <h2>Token Allotted</h2>
        </div>
      </div>
    );
  };
  const TokenMatrix = () => {
    return (
      <div className="mt-24 p-8 relative z-[0]">
        <div data-aos="fade-right ">
          <h1 className="font-game text-5xl pt-20 pb-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange ">
              Token Metrics
            </span>
          </h1>
        </div>
        <div
          ref={ref}
          className="chart-section  p-4 w-full h-screen flex flex-wrap align-middle md:justify-center justify-items-start"
        >
          <Bar title="Private" perc="18.0" />
          <Bar title="Public" perc="9.0" />
          <Bar title="Ecosystem" perc="30.0" />
          <Bar title="Liquidity Provider" perc="15.0" />
          <Bar title="Marketing and Legal" perc="7.0" />
          <Bar title="Advisors" perc="4.0" />
          <Bar title="Team" perc="7.0" />
          <Bar title="Exchange Listings" perc="10.0" />
        </div>
      </div>
    );
  };
  const Tokenomic = () => {
    return (
      <div className="mt-8 relative z-[0]">
        <div data-aos="fade-right">
          <h1 className="font-[game] text-5xl pt-20 pb-10 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange ">
              Tokenomics
            </span>
          </h1>
        </div>
        <div className="flex w-full relative align-middle justify-center mb-6">
          <Image src={tokenTotBG} alt="" height={70} width={650} />
          <h1 className="token-text absolute flex md:top-6 top-2 md:font-hanuman font-bold font-sm md:font-4xl text-center align-middle justify-center ">
            Total Tokens: 1,687,500,000,000,000,000
          </h1>
        </div>
        <div className="flex flex-wrap align-middle justify-center">
          <TokenCard
            icon={to1}
            title="Private"
            total="900,000,000,000,000,000"
          />
          <TokenCard
            icon={to2}
            title="Public"
            total="450,000,000,000,000,000"
          />
          {/* <TokenCard
            icon={to1}
            title="Private"
            total="900,000,000,000,000,000"
          />
          <TokenCard
            icon={to2}
            title="Public"
            total="450,000,000,000,000,000"
          />
          <TokenCard
            icon={to3}
            title="Ecosystem"
            total="1,500,000,000,000,000,000"
          />
          <TokenCard
            icon={to4}
            title="Liquidity Provider"
            total="750,000,000,000,000,000"
          />
          <TokenCard
            icon={to5}
            title="Marketing and Legal"
            total="350,000,000,000,000,000"
          />
          <TokenCard
            icon={to6}
            title="Advisors"
            total="200,000,000,000,000,000"
          />
          <TokenCard icon={to7} title="Team" total="350,000,000,000,000,000" />
          <TokenCard
            icon={to8}
            title="Exchange Listings"
            total="9500,000,000,000,000,000"
          /> */}
        </div>
      </div>
    );
  };
  return (
    <div className="pt-10 ">
      <Tokenomic />
      <TokenMatrix />
    </div>
  );
}
