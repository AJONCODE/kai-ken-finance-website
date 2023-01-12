import Image from "next/image";
import pontem from "../../assets/partners/pontem_network.svg";
import cryptoCup from "../../assets/partners/crypto_cup.png";
import apesZone from "../../assets/partners/apes_zone.jpeg";
import samuraiCryptoClub from "../../assets/partners/samurai_crypto_club.jpeg";
import theCryptoEternity from "../../assets/partners/the_crypto_eternity.jpeg";
import tgkThunders from "../../assets/partners/tgk_thunders.jpeg";
import blokHashVentures from "../../assets/partners/blokhash_ventures.png";
import blockTalks from "../../assets/partners/block_talks.png";
import bos from "../../assets/partners/bos.jpg";
import cryptoFurkan from "../../assets/partners/crypto_furkan.png";
import cryptoNation from "../../assets/partners/crypto_nation.png";
import ethosVerticalMarketing from "../../assets/partners/ethos_vertical_marketing.jpeg";
import vemp from "../../assets/partners/vemp.png";
import brotherhood from "../../assets/partners/brotherhood.png";

import bitboy from "../../assets/partners/logos/bitboy.jpg";
import BullsBears from "../../assets/partners/logos/bulls_bears_beast.png";
import CryptoDaku from "../../assets/partners/logos/crypto_daku.png";
import EvanLuthra from "../../assets/partners/logos/evan_luthra.jpeg";
import intelInves from "../../assets/partners/logos/intelligent_investor.png";
import moonmantra from "../../assets/partners/logos/moonmantra.png";
import oneUpWitCrypto from "../../assets/partners/logos/one_up_wit_crypto.png";
import x21 from "../../assets/partners/logos/x21.jpeg";

import t2 from "../../assets/t2.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Partners() {
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
              Partners
            </span>
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 mt-0  md:w-[80%] w-[100%] md:pl-20 pl-2"
        >
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center">
            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={pontem}
                width={120}
                height={120}
                alt="Pontem Network"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Pontem Network
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="https://pontem.network/" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={cryptoCup}
                width={120}
                height={120}
                alt="Crypto Cup"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Crypto Cup
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={apesZone}
                width={120}
                height={120}
                alt="Apes Zone"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Apes Zone
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={samuraiCryptoClub}
                width={120}
                height={120}
                alt="Samurai Crypto Club"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Samurai Crypto Club
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 mt-0  md:w-[80%] w-[100%] md:pl-20 pl-2"
        >
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center">

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={theCryptoEternity}
                width={120}
                height={120}
                alt="The Crypto Eternity"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                The Crypto Eternity
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>



            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={blockTalks}
                width={120}
                height={120}
                alt="Block Talks"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Block Talks
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={tgkThunders}
                width={120}
                height={120}
                alt="TGK Thunders"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                TGK Thunders
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={blokHashVentures}
                width={120}
                height={120}
                alt="BlokHash Ventures"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                BlokHash Ventures
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 mt-0  md:w-[80%] w-[100%] md:pl-20 pl-2"
        >
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center">

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={bos}
                width={120}
                height={120}
                alt="BOS"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                BOS
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>



            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={cryptoFurkan}
                width={120}
                height={120}
                alt="Crypto Furkan"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Crypto Furkan
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={cryptoNation}
                width={120}
                height={120}
                alt="Crypto Nation"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Crypto Nation
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={ethosVerticalMarketing}
                width={120}
                height={120}
                alt="Ethos Vertical Marketing"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Ethos Vertical Marketing
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 mt-0  md:w-[80%] w-[100%] md:pl-20 pl-2"
        >
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center">

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={vemp}
                width={120}
                height={120}
                alt="VEmp"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                VEmp
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>



            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={brotherhood}
                width={120}
                height={120}
                alt="Brotherhood"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>


            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={bitboy}
                width={120}
                height={120}
                alt="Bitboy"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={BullsBears}
                width={120}
                height={120}
                alt="Bulls Bears and other Beasts"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

          </div>
        </div>












        <div
          data-aos="fade-up"
          className="flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 mt-0  md:w-[80%] w-[100%] md:pl-20 pl-2"
        >
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center">

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={CryptoDaku}
                width={120}
                height={120}
                alt="CryptoDaku"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={EvanLuthra}
                width={120}
                height={120}
                alt="Evan Luthra"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>


            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={intelInves}
                width={120}
                height={120}
                alt="Intelligent Investor"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={moonmantra}
                width={120}
                height={120}
                alt="Moonmantra"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

          </div>
        </div>




        <div
          data-aos="fade-up"
          className="flex flex-row p-6 justify-center align-middle self-center md:px-10 px-2 mt-0  md:w-[80%] w-[100%] md:pl-20 pl-2"
        >
          <div className="font-Poppins flex flex-col md:flex-row gap-x-4 justify-center">

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={oneUpWitCrypto}
                width={120}
                height={120}
                alt="One Up With Crypto"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

            <div className="flex align-middle justify-center flex-col  text-center relative px-8 py-3 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl md:w-[80%] w-[100%]  my-3 md:my-10 mr-4">
              <Image
                src={x21}
                width={120}
                height={120}
                alt="x21"
                className="rounded-full"
              />
              {/* <p className="font-regular font-Poppins text-base mt-6">
                Brotherhood
              </p> */}
              {/* <p className="text-lg font-semibold mt-3">
                <a href="#" target="_blank">
                  <OpenInNewIcon className="cursor-pointer" />
                </a>
              </p> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
