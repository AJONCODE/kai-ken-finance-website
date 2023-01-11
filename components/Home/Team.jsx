import Image from "next/image";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import daku from "../../assets/daku.png";
import TwitterIcon from "@mui/icons-material/Twitter";
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
              Team
            </span>
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 mt-0  md:w-[80%] w-[100%] md:pl-20 pl-2"
        >
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center">
            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10">
              <Image src={t1} height={150} width={150} alt="" className="" />
              <p className="font-regular font-Poppins text-base mt-6">
                Mr 0xAptos
              </p>
              <p className="text-lg font-semibold mt-3">Founder</p>
            </div>
            <div className="flex align-middle justify-center flex-col text-center relative px-8 py-10 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10">
              <Image src={t2} height={150} width={150} alt="" className="" />
              <p className="font-regular font-Poppins text-base mt-6">
                Ms Apetron
              </p>
              <p className="text-lg font-semibold mt-3">Co-founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
