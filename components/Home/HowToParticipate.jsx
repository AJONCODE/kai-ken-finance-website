import Image from "next/image";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";

import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
export default function HowToParticipate() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div id="participate" className="z-[0] relative  pt-32 ">
      <div className="mx-auto container z-[2] relative">
        <div data-aos="fade-right relative ">
          <h1 className="font-extrabold font-Poppins text-4xl text-center text-[dusty-white]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange ">
              How to Participate in our Public sale ?
            </span>
          </h1>

          <p  className="flex md:flex-row flex-col align-middle items-center text-center justify-center md:mx-72 mx-10 mt-9">
            Check our socials for more details.
          </p>
        </div>
        {/* <div
          data-aos="fade-up"
          className="scroll-section p-2 mt-0 md:mt-10 flex justify-between"
        >
          <div className="participate-card">
            <div className="parti-num">
              1
            </div>
            <div className="inner-parti-num">
              1
            </div>
            <Image
              src={p1}
              alt=""
              className="parti-icon"
              height={80}
              width={80}
            />
            <h2 className="parti-title">Connect Wallet</h2>
            <p className="parti-desc">
              Connect your wallet to interact with our platform.
            </p>
          </div>
          <div className="participate-card">
          <div className="parti-num">
              2
            </div>
            <div className="inner-parti-num">
              2
            </div>
            <Image
              src={p2}
              alt=""
              className="parti-icon"
              height={80}
              width={80}
            />
            <h2 className="parti-title">Buy $$$$ Tokens</h2>
            <p className="parti-desc">
              Buy $$$$ tokens from Uniswap to get started.
            </p>
          </div>
          <div className="participate-card">
          <div className="parti-num">
              3
            </div>
            <div className="inner-parti-num">
              3
            </div>
            <Image
              src={p3}
              alt=""
              className="parti-icon"
              height={80}
              width={80}
            />
            <h2 className="parti-title">Stake $$$$</h2>
            <p className="parti-desc">
              Stake the $$$$ tokens on the platform to earn access to sales.
            </p>
          </div>
          <div className="participate-card">
          <div className="parti-num">
              4
            </div>
            <div className="inner-parti-num">
              4
            </div>
            <Image
              src={p4}
              alt=""
              className="parti-icon"
              height={80}
              width={80}
            />
            <h2 className="parti-title">Participate</h2>
            <p className="parti-desc">
              Guaranteed allocation for all $$$$ stakers.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
