import w1 from "../../assets/wpt1.png";
import w2 from "../../assets/wpt2.png";
import w3 from "../../assets/wpt3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AptosCard from "./FeatureCard.jsx"

export default function Features() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div id="whyaptos" className="relative pt-24 md:h-[80%] h-auto z-[0]">
      <div className="mx-auto container z-[2] relative ">
        <div data-aos="fade-right" className="flex flex-col align-middle justify-center">
          <h1 className="text-center font-extrabold font-Poppins text-4xl  pl-0 md:pl-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange ">
              Why KaiKen finance ?
            </span>
          </h1>
          <p  className="flex md:flex-row flex-col align-middle items-center text-center justify-center md:mx-72 mx-10 mt-9">
            We are backed by some of the biggest name in crypto industry. But only difference: we are not regular project, We are degens at best!!
            KaiKen is going to be one of the biggest liquidty launches for meme coins.
          </p>
          <p className="flex md:flex-row flex-col align-middle items-center text-center justify-center md:mx-72 mx-10 mt-9">
            First 5 project on us are already finalized and there will be 3 IDO in 3 Days in our platform
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="scroll-section flex lg:flex-row p-9 flex-wrap justify-center items-center md:h-auto overflow-auto "
        >
          {/* <FeatureCard icons={f1} features="Guild Dao for Move to earn games" /> */}
          <AptosCard icons={w1} features="Scalability" />
          <AptosCard icons={w2} features="Safety"/>
          <AptosCard icons={w3} features="High throughput & low latency" />
        </div>
      </div>
    </div>
  );
}
