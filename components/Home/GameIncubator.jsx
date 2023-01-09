import gi1 from "../../assets/gi1.png";
import gi3 from "../../assets/gi2.png";
import gi2 from "../../assets/gi3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import TaxCard from "./FeatureCard";
import { useEffect } from "react";

export default function GameIncubator() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div id="taxfund" className="relative z-[0] md:h-[80%] h-[100%] mt-0 pt-0 md:pt-12 md:mt-0 md:mb-20">
      
      <div className="mx-auto container z-[2] relative  ">
        <div data-aos="fade-right" className="flex align-middle justify-center flex-col">
          <h1 className="font-extrabold font-Poppins text-4xl text-center text-[dusty-white]">Tax Model</h1>
          {/* <h2 className="flex font-bold text-2xl md:flex-row flex-col align-middle items-center justify-center mt-9">AptosPad Model</h2> */}
          <p className="flex md:flex-row flex-col align-middle items-center text-center justify-center md:mx-72 mx-10 mt-9">
          Innovative tax model for token and ecosystem growth.</p> 

          <p className="flex md:flex-row flex-col align-middle items-center text-center justify-center md:mx-72 mx-10">7/7 Tax: Each Buy or Sell will have a 7% tax. Tax % will be modified or removed later as per market demands. Tax collected will be used for Marketing, BuyBack and Burn tokens and fund Degen VC.</p>
        </div>
          <div data-aos="fade-up" className=" flex flex-col md:flex-row p-6 justify-center md:px-10 mt-2 md:mt-8  ">
            <div className="scroll-section pb-9 md:pb-0 flex flex-row flex-wrap gap-x-2 gap-y-2 w-5/5 justify-center ">
              <TaxCard icons={gi1} features="Buy back burn" desc="Keeping token supply in check and support price action during sell pressure.
" ></TaxCard>
              <TaxCard icons={gi2} features="Marketing" desc="PR, KOL Support, Campaigns, Competitions and More." ></TaxCard>
              <TaxCard icons={gi3} features="Degen VC" desc="Lucrative options for Token holders and stakers to be part of an elite council of degens."></TaxCard>
            </div>
          </div>

      </div>
    </div>
  );
}
