import f2 from "../../assets/offf2.png";
import f3 from "../../assets/offf3.png";
import f4 from "../../assets/offf4.png";
import f5 from "../../assets/offf5.png";
import f6 from "../../assets/offf6.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FeatureCard from "./FeatureCard"

export default function Features() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  // const FeatureCard = ({ icons, features }) => {
  //   return (
  //     <div className="min-w-[312px] md:m-[20px] m-[0px] w-[312px] h-[312px] items-center justify-center flex">
  //       <div className="h-full w-full relative m-2 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl ">
  //         <div className="absolute text-center top-0 w-full h-full flex flex-col items-center justify-center">
  //           <div className="h1/2 mt-[45px]">
  //             <Image src={icons} height={119} width={119} className="mx-auto" alt="" />
  //           </div>
  //           <div className="text-center mt-[35px] w-[90%] h-1/2">
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
    <div className="bg-primary-black relative pt-24 md:h-[80%] h-auto">
      <div className="mx-auto container z-[2] relative bg-matrix ">
        <div data-aos="fade-right">
          <h1 className="text-center font-extrabold font-Poppins text-4xl  pl-0 md:pl-3">
            Our Features
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="scroll-section flex lg:flex-row p-9 flex-wrap justify-center items-center md:h-auto overflow-auto "
        >
          {/* <FeatureCard icons={f1} features="Guild Dao for Move to earn games" /> */}
          <FeatureCard icons={f2} features="Multichain Support" />
          <FeatureCard icons={f4} features="Built on Aptos"/>
          <FeatureCard icons={f3} features="Game plug-in SDK for web3 games" />
          {/* <FeatureCard icons={f4} features="Insured Launchpad for IDO participants"/> */}
          <FeatureCard icons={f5} features="Unique holder program for working together" />
          <FeatureCard icons={f6} features="Staking and LP providing benefits - Marketing, listing support" />
        </div>
      </div>
    </div>
  );
}
