import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Roadmap() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div id="roadmap" className="relative z-[9] h-auto pt-20 ">
      <div className="mx-auto container z-[2] relative w-full flex flex-col ">
        <div data-aos="fade-right">
          <h1 className="w-full justify-center font-extrabold font-Poppins text-4xl text-center text-[dusty-white] ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange ">
              Roadmap
            </span>
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 mt-0  md:w-[80%] w-[100%] md:pl-20 pl-2"
        >
          {/* <div
            className={`"border-x-8 h-[400px] w-2 rounded-md bg-gradient-to-br from-primary-red to-comp-orange "`}
          ></div> */}
          <div className="font-Poppins w-[100%] flex flex-col md:flex-row gap-x-4 justify-center">
            <div className="relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10">
              {/* <div className="absolute -left-[51px]  bg-white w-4 h-[18px] border border-[#848484] rounded-full drop-shadow-md "></div> */}
              <p className="text-left text-2xl w-44 font-bold text-white">
                Q3 2022
              </p>
              <div className="text-left mt-2  text-md text-white pl-2">
                <li className="my-2">TGE</li>
                <li className="my-2">Launch of Kai Ken Finance Launchpad</li>
                <li className="my-2">Growth of community</li>
                <li className="my-2">Degen VC launch</li>
              </div>
            </div>
            <div className="relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10">
              {/* <div className="absolute -left-[51px]  bg-white w-4 h-[18px] border border-[#848484] rounded-full drop-shadow-md "></div> */}
              <p className="text-left text-2xl w-44 font-bold text-white">
                Q4 2022
              </p>
              <li className="text-left mt-2 my-2 text-md text-white text-wrap px-2 ">
              Kai Ken Finance Mainnet launch
              </li>
            </div>
            {/* <div className="relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-10">
              <div className="absolute -left-[51px]  bg-white w-4 h-[18px] border border-[#848484] rounded-full drop-shadow-md "></div>
              <p className="text-left text-xl w-44 font-bold text-white">
                Q4 2022
              </p>
              <li className="text-left mt-2 my-2 text-sm text-white pl-2 ">
                Guild creation
              </li>
            </div>
            <div className="relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-10">
              <div className="absolute -left-[51px]  bg-white w-4 h-[18px] border border-[#848484] rounded-full drop-shadow-md "></div>
              <p className="text-left text-xl w-44 font-bold text-white">
                Q2 2023
              </p>
              <li className="text-left mt-2 my-2 text-sm text-white pl-2 ">
                SDK for web2 to web3 games
              </li>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
