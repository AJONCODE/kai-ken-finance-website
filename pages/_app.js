import { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Ripple from "../components/Home/Ripple";
import WalletConnect from "../components/WalletConnection";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
const ethers = require("ethers");
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const [clipClassName, setClipClassName] = useState("clip-circle-100");

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });

    setTimeout(() => {
      setClipClassName("clip-circle-0");
    }, 1500);
  }, []);

  const [modal, setModal] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [address, setAddress] = useState("");
  const [connected, setConnected] = useState(false);
  const [signer, setSigner] = useState(null);
  const open = () => {
    setModal(!modal);
  };

  const close = () => {
    setModal(!modal);
  };

  const connect = async (type) => {
    setConnecting(true);
    if (type === "metamask") {
      metamask();
    } else if (type === "walletconnect") {
      walletconnect();
    } else {
      coinbase();
    }
  };

  const metamask = async () => {
    try {
      if (window.ethereum !== undefined) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.enable();
        const address = await provider.listAccounts();
        //  let network = await provider.getNetwork()
        let signer = await provider.getSigner();
        setAddress(address[0]);
        setSigner(signer);
        setConnecting(false);
        setConnected(true);
        setModal(false);
      }
    } catch (e) {
      // Error Logs
      toast.error(err.message, { position: "top-right" });
      setConnecting(false);
    }
  };

  const walletconnect = async () => {
    try {
      const web3Provider = new WalletConnectProvider({
        infuraId: "857fdaf932a740ffbe04a50c51aaee8e",
      });
      await web3Provider.enable().then(async () => {
        const provider = new ethers.providers.Web3Provider(web3Provider);
        const address = await provider.listAccounts();
        const signer = provider.getSigner();
        setAddress(address[0]);
        setSigner(signer);
        setConnecting(false);
        setConnected(true);
        setModal(false);
      });
    } catch (err) {
      // Error Logs
      toast.error(err.message, { position: "top-right" });
      setConnecting(false);
    }
  };

  const coinbase = async () => {
    const walletLink = new WalletLink({
      appName: "Revo Launcher",
      appLogoUrl: "https://app.compound.finance/images/compound-logo.svg",
      darkMode: false,
    });
    try {
      const web3Provider = walletLink.makeWeb3Provider(
        "https://data-seed-prebsc-2-s3.binance.org:8545/",
        97
      );
      await web3Provider.enable().then(async () => {
        const provider = new ethers.providers.Web3Provider(web3Provider);
        const address = await provider.listAccounts();
        const signer = provider.getSigner();
        setAddress(address[0]);
        setSigner(signer);
        setConnecting(false);
        setConnected(true);
        setModal(false);
      });
    } catch (err) {
      // Logs err
      toast.error(err.message, { position: "top-right" });
      setConnecting(false);
    }
  };

  const disconnect = () => {
    setSigner(null);
    setAddress("");
    setConnected(false);
    setModal(false);
    localStorage.clear();
  };

  return (
    <div className="relative ">
      <Head>
        <title>Kai Ken Finance | The First Fundraising platform on aptos.</title>
        <meta property="og:title" content="kai ken finance" key="title" />
        <link
          rel="preload"
          href="/fonts/game.ttf"
          as="font"
          crossOrigin="anonymous"
        />

      </Head>
      <div className={`mx-auto loader-wrapper  bg-primary-black`}>
        <Navbar open={open} connected={connected} address={address} />
        <Ripple />
        <main className="min-h-screen ">
          <Component {...pageProps} signer={signer} address={address} />
        </main>
        <WalletConnect
          modal={modal}
          disconnect={disconnect}
          connect={connect}
          close={close}
          connecting={connecting}
          connected={connected}
          address={address}
        />
        <Footer />
        <Toaster />
      </div>
      <div>
        <div
          className={`z-[2] fixed w-full h-[100vh] top-0 bg-gray-900  flex flex-col items-center justify-center ${clipClassName} clip`}
        >
          <div>
            <div className="loader">
              <svg viewBox="0 0 80 80">
                <circle id="test" cx="40" cy="40" r="32"></circle>
              </svg>
            </div>
            <div className="loader triangle">
              <svg viewBox="0 0 86 80">
                <polygon points="43 8 79 72 7 72"></polygon>
              </svg>
            </div>
            <div className="loader">
              <svg viewBox="0 0 80 80">
                <rect x="8" y="8" width="64" height="64"></rect>
              </svg>
            </div>
          </div>

          <h1 className="font-[poppins-eb] text-6xl loading-dots p-1 ml-[20px]">
            ...
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
