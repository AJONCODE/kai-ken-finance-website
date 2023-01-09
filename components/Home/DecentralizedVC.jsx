import dvc1 from "../../assets/dvc1.png";
import dvc2 from "../../assets/dvc2.png";
import dvc4 from "../../assets/dvc4.png";
import dvc5 from "../../assets/dvc5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import VcCard from "./FeatureCard"

export default function DecentralizedVC() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  // const VcCard = ({ height, icons, features }) => {
  //   return (
  //     <div className={`w-[324px] items-center justify-center p-[1px] rounded-2xl flex  ${"h-["+height+"px]"}`}>
  //       <div className="h-full w-full relative  rounded-2xl ">
  //         <div className=" top-0 w-full h-full flex flex-row px-3">
  //           <div className="h-full w-[50px] align-top pt-6">
  //             <Image src={icons} height={100} width={100} className="mx-auto" alt="" />
  //           </div>
  //           <div className="text-left w-[231px] h-full align-top pt-6 ml-3">
  //             <p className="font-regular font-Poppins text-base">
  //               {features}
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div id="degenvc" className="z-[0] relative md:h-full h-auto pt-24 ">
      <div className="mx-auto container z-[2] relative ">
        <div data-aos="fade-right relative " className="flex flex-col">
          <h1 className="font-extrabold font-Poppins text-4xl text-center text-[dusty-white]">
            Degen VC
          </h1>
          <p className="flex md:flex-row flex-col align-middle items-center text-center justify-center md:mx-72 mx-10 mt-9">DegenVC is investment arm from us which will invest in early stage projects on Aptos ecosystem and all token holders get various opportunities to generate income through profit sharing.</p>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row p-6 justify-between md:px-10 mt-2 md:mt-8 "
        >
          {/* <div className="md:flex flex-row place-content-center content-center justify-center w-full hidden"> 
            <div className="flex flex-col justify-center">
              <div className="relative left-[-0.5px] top-0 bg-glow-circle w-4 h-4 rounded-full drop-shadow-md "></div>
              <div className="relative left-[6px] bg-glow-circle w-[3px] h-[80em]"></div>
              <div className="relative left-[-74px] top-[-70em] bg-glow-circle w-[5em] h-[3px]"></div>
              <div className="relative left-[9px] top-[-60em] bg-glow-circle w-[5em] h-[3px]"></div>
              <div className="relative left-[-74px] top-[-50em] bg-glow-circle w-[5em] h-[3px]"></div>
              <div className="relative left-[9px] top-[-40em] bg-glow-circle w-[5em] h-[3px]"></div>
              <div className="relative left-[-74px] top-[-30em] bg-glow-circle w-[5em] h-[3px]"></div>
              <div className="relative left-[9px] top-[-20em] bg-glow-circle w-[5em] h-[3px]"></div>
              <div className="relative left-[-74px] top-[-10em] bg-glow-circle w-[5em] h-[3px]"></div>
            </div>
          </div> */}
          <div className="scroll-section pb-9 md:pb-0 flex flex-row flex-wrap gap-x-2 gap-y-2 w-5/5 justify-center ">
            <VcCard icons={dvc1} features="Top holders become part of community council VIP group" ></VcCard>
            <VcCard icons={dvc2} features="Profit sharing with stakers and holders" ></VcCard>
            <VcCard icons={dvc4} features="All launchpad projects can benefit from the ecosystem development" ></VcCard>
            <VcCard icons={dvc5} features="Grants for Devs to build, test and submit Projects" ></VcCard>
            {/* <VcCard icons={dvc6} features="Close partnerships with NFT minting launchpads, NFT market places and DEXes." ></VcCard> */}
          </div>
        </div>
      </div>
    </div>
  );
}
