import Image from "next/image";
import Link from "next/link";
// import Logo from "../assets/mtkz_Logo.svg";
import Logo from "../assets/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FilledButton from "./util/WalletConnectedButton";
import React, { useState } from "react";
import { useRef } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 9000,
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      data-aos="fade-down"
      className=" z-[99] absolute top-0 w-full md:px-0 md:py-0 px-2 py-1 border-b border-slate-800 md:h-[90px]  backdrop-blur-lg	"
    >
      <div className="container mx-auto md:py-0 py-1 flex flex-wrap items-center w-full">
        <div>
          <Link href="/" passHref>
            <div
              className="w-full lg:w-auto flex hover:cursor-pointer items-center "
              onClick={() => {
                navbarOpen ? setNavbarOpen(!navbarOpen) : "";
              }}
            >
              <div className="hidden md:flex  md:p-0 p-1 lg:p-2">
                <Image
                  src={Logo}
                  width={40}
                  height={50}
                  alt="revo-logo"
                  objectFit="cover"
                />
              </div>
              <div className="flex md:hidden  md:p-0 p-1 lg:p-2">
                <Image
                  src={Logo}
                  width={30}
                  height={35}
                  alt="revo-logo"
                  objectFit="cover"
                />
              </div>
            </div>
          </Link>
        </div>
        <div
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="absolute top-4 right-8 cursor-pointer lg:hidden"
        >
          {navbarOpen ? (
            <CloseIcon
              className="text-primary  text-white"
              style={{ fontSize: "30px" }}
            />
          ) : (
            <MenuRoundedIcon
              className="text-primary  text-white"
              style={{ fontSize: "30px" }}
            />
          )}
        </div>
        <div
          className={`w-full lg:w-4/12 block lg:block bg-mobile-nav  ${
            navbarOpen ? "" : "hidden"
          }`}
        >
          <ul
            className={`flex flex-col lg:flex-row lg:justify-start items-center mt-3 lg:mt-4`}
          >
            {/* <li className="w-full lg:w-auto flex justify-start lg:justify-evenly lg:items-center lg:pl-6  my-3 lg:my-6">
              <Link href="https://docsend.com/view/d673mk8smp8nweke" passHref>
                <a target="_blank">
                  <pre className="font-regular font-Poppins  text-sm  hover-underline-animation hover:cursor-pointer text-wordings-white hover:text-primary-violet">
                    Pitch Deck
                  </pre>
                </a>
              </Link>
            </li> */}
            {/* <li className="w-full lg:w-auto flex justify-start lg:justify-evenly lg:items-center lg:pl-6  my-3 lg:my-6">
              <Link href="#whyaptos" passHref>
                <p  onClick={() => setNavbarOpen(!navbarOpen)}>
                  <pre className="font-regular font-Poppins  text-sm  hover-underline-animation hover:cursor-pointer text-wordings-white hover:text-primary-violet">Why aptos</pre>
                </p>
              </Link>
            </li>

            <li className="w-full lg:w-auto flex justify-start lg:justify-evenly lg:items-center  lg:pl-6  my-3 lg:my-0">
              <Link href="#participate" passHref>
                <p className="font-regular font-Poppins  text-sm text-wordings-white hover:text-primary-violet hover-underline-animation hover:cursor-pointer" onClick={() => setNavbarOpen(!navbarOpen)}>
                  Participate
                </p>
              </Link>
            </li>
            <li className="w-full lg:w-auto flex justify-start lg:justify-evenly  lg:pl-6 lg:my-0   my-3 ">
              <Link href="#tokenomics" passHref>
                <p className="font-regular font-Poppins  text-sm text-wordings-white hover:text-primary-violet hover-underline-animation hover:cursor-pointer" onClick={() => setNavbarOpen(!navbarOpen)}>
                  Tokenomics
                </p>
              </Link>
            </li>
            <li className="w-full lg:w-auto flex justify-start lg:pl-6 lg:my-0   my-3 ">
              <Link href="#taxfund" passHref>
                <p onClick={() => setNavbarOpen(!navbarOpen)}><pre className="font-regular font-Poppins  text-sm text-wordings-white hover:text-primary-violet  hover-underline-animation">Tax Fund</pre></p>
              </Link>
            </li>
            <li className="w-full lg:w-auto flex justify-start lg:pl-6 lg:my-0   my-3 ">
              <Link href="#degenvc" passHref>
                <p onClick={() => setNavbarOpen(!navbarOpen)}><pre className="font-regular font-Poppins  text-sm text-wordings-white hover:text-primary-violet  hover-underline-animation">Degen VC</pre></p>
              </Link>
            </li>
            <li className="w-full lg:w-auto flex justify-start lg:justify-evenly lg:pl-6 lg:my-0   my-3 ">
              <Link href="#roadmap" passHref>
                <p className="font-regular font-Poppins  text-sm text-wordings-white hover:text-primary-violet  hover-underline-animation" onClick={() => setNavbarOpen(!navbarOpen)}>Roadmap</p>
              </Link>
            </li>  */}

            {/* <li className="block md:hidden w-full flex justify-start  ml-0 my-3">
              <FilledButton
                onText="Wallet Connected"
                offText="Connect Wallet"
                connected={props.connected}
                disabled
                // onClick={() => {
                //   props.open();
                //   setNavbarOpen(!navbarOpen);
                // }}
              />
            </li> */}
          </ul>
        </div>
        <div className="hidden md:block w-full lg:w-auto flex justify-start lg:justify-evenly  ml-0 lg:ml-auto lg:my-6 lg:pl-12  my-3 ">
          <Link href="https://app.kaikenfinance.com" passHref>
            <a target="_blank">
              {/* <div className="flex w-[172px] h-[36px] bg-[#c04dc9] rounded-md"> */}
              <div className="flex w-[172px] h-[36px] bg-[rgba(186,111,74,0.70)] rounded-md">

                <h1 className="font-bold font-Poppins text-sm  text-justify mx-auto my-auto align-middle">Launch Application</h1>
              </div>
            </a>
          </Link>
        </div>
        <a
          href="https://twitter.com/kaikenfinance"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon className="cursor-pointer ml-6 text-white" />
        </a>
        <a href="https://t.me/kaikenfinance" target="_blank" rel="noreferrer">
          <TelegramIcon className="cursor-pointer ml-4 text-white" />
        </a>
      </div>
    </div>
  );
}
