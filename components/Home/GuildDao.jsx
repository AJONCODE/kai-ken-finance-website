import Image from "next/image";
import pinkGuild from "../../assets/pinkguild.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function GuildDao() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="bg-primary-black relative pt-20">
      <div className="mx-auto container z-[2] relative ">
        <div data-aos="fade-right relative ">
          <h1 className="font-extrabold font-Poppins text-4xl text-center text-[dusty-white]">W3K Tax</h1>
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 md:py-24 py-10 mx-auto">
            <div className=" lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={pinkGuild}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-24 mt-6 lg:mt-0">
                <div>
                  <div className="flex align-middle justify-center">
                    <div className="red-bullet "></div>
                    <p className="font-regular font-Poppins text-wordings-white text-base m-[10px] w-[520px]">
                      Incentivized <span className="font-semibold font-Poppins text-base bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange">Gamenet</span> Beta test to earn rewards
                    </p>
                  </div>
                  <div className="flex ">
                    <div className="red-bullet"></div>
                    <p className="font-regular font-Poppins text-wordings-white text-base m-[10px] w-[497px]">Move to <span className="font-semibold font-Poppins text-base bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange">Earn</span> Guild DAO</p>
                  </div>
                  <div className="flex ">
                    <div className="red-bullet"></div>
                    <p className="font-regular font-Poppins text-wordings-white text-base m-[10px] w-[520px]">
                    <span className="font-semibold font-Poppins text-base bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange">Passive Income </span>opportunity for people who are not good for
                      p2e but can easily do move to earn m2e
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
