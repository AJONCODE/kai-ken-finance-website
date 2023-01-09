import Image from "next/image";
import daku from "../../assets/daku.png";
import anon from "../../assets/Anon.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Advisors() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div id="advisor" className="relative z-[9] h-auto pt-20 ">
      <div className="mx-auto container z-[2] relative w-full flex flex-col ">
        <div data-aos="fade-right">
          <h1 className="w-full justify-center font-extrabold font-Poppins text-4xl text-center text-[dusty-white] ">
            Advisors
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="scroll-section flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 md:w-[80%] w-[100%] pl-2"
        >
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center mr-4">
            <div className="min-w-[250px] flex align-middle justify-center flex-col text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10">
              {" "}
              <Image
                src={daku}
                width={150}
                height={150}
                alt="Crypto Daku"
                className="rounded-full"
              />
              <p className="font-regular font-Poppins text-base mt-6">
                Crypto Daku{" "}
                <a href="https://twitter.com/CryptoDaku_">
                  <TwitterIcon className="cursor-pointer" />
                </a>
              </p>
              <p className="text-sm mt-3">Tokenomics and Launch Advisor</p>
            </div>
          </div>
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center mr-4">
            <div className="min-w-[250px] flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10">
              {" "}
              <Image
                src={anon}
                width={220}
                height={205}
                alt=""
                className="rounded-full"
              />
              <p className="font-regular font-Poppins text-base mt-6">
                TBA{" "}
                {/*<a href="#"><TwitterIcon className="cursor-pointer"/></a>*/}
              </p>
              <p className="text-sm mt-3">To be revealed</p>
            </div>
          </div>
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center">
            <div className="min-w-[250px] flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10">
              {" "}
              <Image
                src={anon}
                width={220}
                height={205}
                alt=""
                className="rounded-full"
              />
              <p className="font-regular font-Poppins text-base mt-6">
                TBA{" "}
                {/* <a href="https://twitter.com/CryptoDaku_"><TwitterIcon className="cursor-pointer"/></a>*/}
              </p>
              <p className="text-sm mt-3">To be revealed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
