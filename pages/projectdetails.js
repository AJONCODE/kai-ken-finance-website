import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import axios from "axios";
import { buyWithBNB, getSaleData } from "../helpers/launcher-utils";
import BuyTokens from "../components/Launchpad/Project/BuyTokens";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ethers } from "ethers";
import { BASEURI } from "./api/baseURI";
import { data } from "autoprefixer";

function ProjectDetails({ address, signer }) {
  const [currentTab, setCurrenttab] = useState("description");
  const [isLoading, setIsLoading] = useState(true);
  const [saleOver, setSaleOver] = useState(false);
  const [isPublic, setPublic] = useState();
  const [salesData, setSaleData] = useState();
  const [totalSold, setToalSold] = useState(0);
  const [showProject, setShowProject] = useState(false);

  const [state, setState] = useState({
    data: {
      id: "",
      attributes: {
        name: "",
        desc: "",
        project_id: "",
        content: "",
        decimal: "",
        total_sale: "",
        public_allocation: "",
        stake_start_time: "",
        stake_end_time: "",
        public_sale_start_time: "",
        public_sale_end_time: "",
        socail_media: {
          twitter: "",
          linkedin: "",
          instagram: "",
          facebook: "",
          medium: "",
          telegram: "",
          reddit: "",
          email: "",
        },
        contract_address: "",
        createdAt: "",
        updatedAt: "",
        publishedAt: "",
        cover_image: "",
        stake_pool_id: "",
        public_per_wallet: "",
        stake_type: "",
        project_token_address: "",
        token_symbol: "",
        price: "",
      },
    },
    meta: {},
  });

  const handleShowProject = () => setShowProject(!showProject);

  useEffect(() => {
    let value = [];
    let totalSold = 0;
    axios
      .get(`${BASEURI}project-masters/${id}`)
      .then(async (res) => {
        if (res.status === 200) {
          setState(res.data);
          setIsLoading(false);
          let data = await getSaleData(
            res.data.data.attributes.contract_address
          );
          for (let i = 0; i < data.length; i++) {
            totalSold =
              totalSold +
              Number(
                ethers.utils.formatEther(data[i].purchaseAmount.toString())
              );
            value.push({
              address: data[i].userAddress,
              purchaseAmount: Number(
                ethers.utils.formatEther(data[i].purchaseAmount.toString())
              ).toLocaleString(),
            });
          }
          setToalSold(totalSold);

          setSaleData(value);
          let currentTime = Math.floor(Date.now() / 1000);

          if (
            currentTime >= res.data.data.attributes.stake_start_time &&
            currentTime <= res.data.data.attributes.stake_end_time
          ) {
            setPublic(false);
          } else if (
            currentTime >= res.data.data.attributes.public_sale_start_time &&
            currentTime <= res.data.data.attributes.public_sale_end_time
          ) {
            setPublic(true);
          } else {
            setSaleOver(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (tab) => {
    setCurrenttab(tab);
  };
  const router = useRouter();
  const { id } = router.query;

  const convertTimeToUTC = (time) => {
    let date = new Date(time * 1000);
    return date.toUTCString();
  };

  function Socials() {
    if (!state.data.attributes.socail_media) return;

    var social_media = JSON.parse(state.data.attributes.socail_media);
    var facebook = social_media.facebook;
    var instagram = social_media.instagram;
    var linkedin = social_media.linkedin;
    var twitter = social_media.twitter;
    var reddit = social_media.reddit;
    var email = social_media.email;

    return (
      <div className="rounded-xl py-1 px-12 w-full mx-20">
        <div className="flex">
          <div
            className={`"flex flex-1 p-1 items-center cursor-pointer ${
              facebook.toString() == "" ? "hidden" : ""
            } `}
          >
            <Link passHref={true} href={"https://"+facebook}>
              <a>
                <FacebookIcon size={2} className="text-white text-2xl " />
              </a>
            </Link>
          </div>
          <div
            className={`"flex flex-1 p-1 items-center cursor-pointer ${
              instagram.toString() == "" ? "hidden" : ""
            }`}
          >
            <Link passHref={true} href={"https://"+instagram}>
              <a>
                <InstagramIcon href={instagram} size={2} className="text-white text-2xl " />
              </a>
            </Link>
          </div>
          <div
            className={`"flex flex-1 p-1 items-center cursor-pointer ${
              twitter.toString() == "" ? "hidden" : ""
            } `}
          >
            <Link passHref={true} href={"https://"+twitter}>
              <a>
                <TwitterIcon size={2} className="text-white text-2xl " />
              </a>
            </Link>
          </div>
          <div
            className={`"flex flex-1 p-1 items-center cursor-pointer ${
              linkedin.toString() == "" ? "hidden" : ""
            }`}
          >
            <Link passHref={true} href={"https://"+linkedin}>
              <a>
                <LinkedInIcon size={2} className="text-white text-2xl " />
              </a>
            </Link>
          </div>
          <div
            className={`"flex flex-1 p-1 items-center cursor-pointer ${
              reddit.toString() == "" ? "hidden" : ""
            }`}
          >
            <Link passHref={true} href={"https://"+reddit}>
              <a>
                <RedditIcon size={2} className="text-white text-2xl " />
              </a>
            </Link>
          </div>
          <div
            className={`"flex flex-1 p-1 items-center  cursor-pointer ${
              email.toString() == "" ? "hidden" : ""
            }`}
          >
            <Link href={"mailto:" + email}>
              <span>
                <EmailIcon size={2} className="text-white text-2xl" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  function RightPanel() {
    return (
      <div
        className={`${
          showProject ? "bg-opaque-blue" : "bg-transparent-blue"
        } lg:bg-[#FFFFFF1A] border border-[#848484] rounded-xl my-2 z-10 py-1 px-4 border-1 `}
      >
        <div className="flex ">
          <h1 className="flex-1 text-2xl lg:text-4xl text-white font-bold py-4 mt-3 lg:mt-1 px-2">
            {state.data.attributes.name}
          </h1>
          <div className="flex-1 mt-5">
            <Socials />
          </div>
        </div>
        <hr className="border-slate-700" />
        <div className="flex flex-col lg:flex-row lg:m-2 lg:p-2">
          <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
            <p className="text-[dusty-white] text-sm">Token</p>
            <p className="text-white font-bold text-lg">
              ${state.data.attributes.token_symbol}
            </p>
          </div>
          <div className="mr-6 py-2 lg:p-0 lg:px-5 lg:mx-8 border-b  lg:border-0 lg:border-l lg:border-slate-700 border-gray-800">
            <p className="text-[dusty-white] text-sm">Total sale</p>
            <p className="text-white font-bold text-lg">
              ${state.data.attributes.total_sale.toLocaleString()}
            </p>
          </div>
          <div className="mr-6 py-2 lg:p-0 lg:px-5 lg:mx-8 border-b  lg:border-0 lg:border-l lg:border-slate-700 border-gray-800">
            <p className="text-[dusty-white] text-sm">Base price</p>
            <p className="text-white font-bold text-lg">
              ${state.data.attributes.price}
            </p>
          </div>
          <div className="mr-6 py-2 lg:p-0 lg:px-5 lg:mx-8 border-b  lg:border-0 lg:border-l lg:border-slate-700 border-gray-800">
            <p className="text-[dusty-white] text-sm">Limit per wallet</p>
            <p className="text-white font-bold text-lg">
              ${state.data.attributes.public_per_wallet}
            </p>
          </div>
        </div>
        <hr className="hidden lg:block lg:border-slate-700" />
        {!saleOver ? (
          <>
            {TabBar()}
            {currentTab == "description" ? description() : ""}
            {currentTab == "nftsale" ? nftSale() : ""}
            {currentTab == "tokensale" ? TokenSale() : ""}
          </>
        ) : (
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="w-full flex">
                  <button
                    className={`px-8 py-3 bg-gradient-to-r from-primary-red to-comp-orange rounded-md text-white ml-auto`}
                    disabled={true}
                  >
                    Download Sales Data
                  </button>
                </div>
                <div className="overflow-hidden shadow-md sm:rounded-lg border border-gray-600 mt-5">
                  <table className="min-w-full">
                    <thead className=" border-b   dark:border-gray-500">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xm font-medium tracking-wider text-left text-white uppercase dark:text-white"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xm font-medium tracking-wider text-right text-white uppercase dark:text-white"
                        >
                          Token Purchased
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {salesData &&
                        salesData.map((v, i) => {
                          return (
                            <tr
                              key={i}
                              className=" border-b  dark:border-gray-500"
                            >
                              <td className="py-4 px-6 text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                                {v.address}
                              </td>
                              <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                                {v.purchaseAmount.toLocaleString()}
                              </td>
                            </tr>
                          );
                        })}
                      <tr className="  dark:bg-[#A68D00]">
                        <td className="py-4 px-6 text-xl font-bolder  text-white text-left whitespace-nowrap dark:dark:text-white">
                          Total Tokens Sold
                        </td>
                        <td className="py-4 px-6 text-xl font-bolder text-green-500 text-right whitespace-nowrap dark:text-white">
                          {totalSold.toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );

    function TabBar() {
      return (
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex -mb-px">
            <li className="mr-2">
              <a
                onClick={() => handleChange("description")}
                className={`h-[40px] inline-block mt-5 pt-2 px-4 text-md font-medium text-[dusty-white] text-center align-middle rounded-t-lg border-b-2 whitespace-nowrap	bg-[#FFFFFF1A]  ${
                  currentTab === "description"
                    ? `dark:text-white dark:border-blue-400 bg-[#FFFFFF1A]`
                    : `hover:border-gray-300 dark:text-white dark:hover:text-gray-300 border-transparent`
                }`}
              >
                About Project{" "}
              </a>
            </li>
            <li className="mr-2">
              <a
                onClick={() => handleChange("nftsale")}
                className={`h-[40px] inline-block mt-5 pt-2 px-4 text-md font-medium text-center rounded-t-lg border-b-2 whitespace-nowrap	bg-[#FFFFFF1A]  ${
                  currentTab === "nftsale"
                    ? `dark:text-white dark:border-blue-400 bg-[#FFFFFF1A]`
                    : `hover:border-gray-300 dark:text-white dark:hover:text-gray-300 border-transparent`
                }`}
                aria-current="page"
              >
                Project Timing Information
              </a>
            </li>
            <li className="mr-2">
              <a
                onClick={() => handleChange("tokensale")}
                className={`h-[40px] inline-block mt-5 pt-2 px-4 text-md font-medium text-center rounded-t-lg border-b-2 whitespace-nowrap	bg-[#FFFFFF1A]   ${
                  currentTab === "tokensale"
                    ? `dark:text-white dark:border-blue-400 bg-[#FFFFFF1A]`
                    : `hover:border-gray-300 dark:text-white dark:hover:text-gray-300 border-transparent`
                }`}
              >
                Project Chain Information
              </a>
            </li>
          </ul>
        </div>
      );
    }

    function description() {
      return (
        <div className=" rounded-xl col-span-2 row-span-3 pl-8 pr-8 pt-6 pb-6 h-[24.6em] overflow-auto">
          <div className="flex"></div>
          <ReactMarkdown className="markdown">
            {state.data.attributes.content}
          </ReactMarkdown>
        </div>
      );
    }

    function nftSale() {
      return (
        <div className="flex flex-col h-[24.6em]">
          <div className=" lg:hidden">
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
              <p className="text-[dusty-white]">Stack Sale Start Time</p>
              <p className="text-gray-200">
                {convertTimeToUTC(state.data.attributes.stake_start_time)}
              </p>
            </div>
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
              <p className="text-white">Stack End Start Time</p>
              <p className="text-gray-200">
                {convertTimeToUTC(state.data.attributes.stake_end_time)}
              </p>
            </div>
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
              <p className="text-white">Stack End Start Time</p>
              <p className="text-gray-200">
                {convertTimeToUTC(state.data.attributes.public_sale_start_time)}
              </p>
            </div>
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
              <p className="text-white">Stack End Start Time</p>
              <p className="text-gray-200">
                {convertTimeToUTC(state.data.attributes.public_sale_end_time)}
              </p>
            </div>
          </div>
          {TableForLgScreen(convertTimeToUTC, state)}
        </div>
      );
    }

    function TokenSale() {
      return (
        <div>
          {" "}
          <div className="hidden lg:block">{TokenSaleChainInfo()}</div>
          <div className="lg:hidden">
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800 overflow-hidden">
              <p className="text-white">Token Address</p>
              <a
                className="text-gray-100"
                target="_blank"
                rel="noreferrer"
                href="https://testnet.bscscan.com/address/0x27186D68Bf8557fDB0f3FEca5B361d2cC70959f9"
              >
                {state.data.attributes.project_token_address}{" "}
                <OpenInNewIcon fontSize="10" />
              </a>
            </div>
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800 overflow-hidden">
              <p className="text-white"> Deployed Contract Address</p>
              <a
                className="text-gray-100"
                target="_blank"
                rel="noreferrer"
                href={`https://testnet.bscscan.com/address/${state.data.attributes.contract_address}`}
              >
                {state.data.attributes.contract_address}{" "}
                <OpenInNewIcon fontSize="10" />
              </a>
            </div>
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
              <p className="text-white">Token Symbol</p>
              <p className="text-gray-200">
                {state.data.attributes.token_symbol}
              </p>
            </div>
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
              <p className="text-white">Token Decimals</p>
              <p className="text-gray-200">{state.data.attributes.decimal}</p>
            </div>
            <div className="mr-6 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
              <p className="text-white">Token Base Price</p>
              <p className="text-gray-200">${state.data.attributes.price}</p>
            </div>
            <div className="mr-6 mb-10 py-2 lg:p-0 border-b  lg:border-0 border-gray-800">
              <p className="text-white">Project Type</p>
              <p className="text-gray-200">
                {state.data.attributes.stake_type === true
                  ? "Stake Type"
                  : "Whitelisted"}
              </p>
            </div>
          </div>
        </div>
      );

      function TokenSaleChainInfo() {
        return (
          <div className="flex flex-col h-[24.6em]">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md sm:rounded-lg  mt-5">
                  <table className="min-w-full">
                    <tbody>
                      <tr className="border-b  dark:border-gray-500">
                        <td className="py-4  text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                          Token Address
                        </td>
                        <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white underline underline-offset-1">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://testnet.bscscan.com/address/0x27186D68Bf8557fDB0f3FEca5B361d2cC70959f9"
                          >
                            {state.data.attributes.project_token_address}{" "}
                            <OpenInNewIcon fontSize="10" />
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b  dark:border-gray-500">
                        <td className="py-4  text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                          Deployed Contract Address
                        </td>
                        <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white underline underline-offset-1">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={`https://testnet.bscscan.com/address/${state.data.attributes.contract_address}`}
                          >
                            {state.data.attributes.contract_address}{" "}
                            <OpenInNewIcon fontSize="10" />
                          </a>
                        </td>
                      </tr>
                      <tr className=" border-b  dark:border-gray-500">
                        <td className="py-4  text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                          Token Symbol
                        </td>
                        <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                          ${state.data.attributes.token_symbol}
                        </td>
                      </tr>
                      <tr className=" border-b dark:border-gray-500">
                        <td className="py-4  text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                          Token Decimals
                        </td>
                        <td className="py-4  px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                          {state.data.attributes.decimal}
                        </td>
                      </tr>
                      <tr className=" border-b  dark:border-gray-500">
                        <td className="py-4  text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                          Token Base Price
                        </td>
                        <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                          ${state.data.attributes.price}
                        </td>
                      </tr>
                      <tr className=" border-b  dark:border-gray-500">
                        <td className="py-4  text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                          Project Type
                        </td>
                        <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                          {state.data.attributes.stake_type === true
                            ? "Stake Type"
                            : "Whitelisted"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return !isLoading ? (
    <>
      <div
        className="h-[300px] lg:h-[500px] container mt-20 mx-auto bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${state.data.attributes.cover_image})`,
        }}
      ></div>

      <div>
        <div className="flex flex-col lg:flex-row container mx-auto">
          <div className="hidden lg:block z-9 lg:w-full">
            <RightPanel />
          </div>
          <div className="flex-col z-10 lg:mr-5 lg:px-3 lg:m-0 lg:w-1/2 w-full">
            <BuyTokens
              data={state.data?.attributes}
              projectId={state.data?.id}
              address={address}
              signer={signer}
              // image={`https://dry-badlands-06095.herokuapp.com${info.cover_image.data.attributes.url}`}
            />
          </div>

          <div className="lg:hidden">
            <button
              onClick={handleShowProject}
              className={` transition-all ease-in-out delay-550 ${
                showProject ? "bg-red-400" : "blue-button"
              }  w-full fixed z-[100000] bottom-0 left-0 py-3 bg-gradient-to-r from-primary-red to-comp-orange rounded-md`}
            >
              {showProject ? "Close" : "Read About Project"}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`h-[100vh] rounded  ${
          showProject ? "" : "translate-y-full"
        } transition-all ease-in-out delay-550 overflow-y-auto z-[9999] fixed bottom-0 w-full left-0`}
      >
        <div className="flex w-full lg:hidden">
          <RightPanel />
        </div>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
}
export default ProjectDetails;
function TableForLgScreen(convertTimeToUTC, state) {
  return (
    <div className="hidden lg:block overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden shadow-md sm:rounded-lg border border-gray-600 mt-5">
          <table className="min-w-full">
            <thead className=" border-b   dark:border-gray-500">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 text-xm font-medium tracking-wider text-left text-white uppercase dark:text-white"
                >
                  Project Stages
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xm font-medium tracking-wider text-right text-white uppercase dark:text-white"
                >
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-b  dark:border-gray-500">
                <td className="py-4 px-6 text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                  Stack Sale Start Time
                </td>
                <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                  {convertTimeToUTC(state.data.attributes.stake_start_time)}
                </td>
              </tr>
              <tr className=" border-b dark:border-gray-500">
                <td className="py-4 px-6 text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                  Stack Sale End Time
                </td>
                <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                  {convertTimeToUTC(state.data.attributes.stake_end_time)}
                </td>
              </tr>
              <tr className=" border-b  dark:border-gray-500">
                <td className="py-4 px-6 text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                  Public Sale Start Time
                </td>
                <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                  {convertTimeToUTC(
                    state.data.attributes.public_sale_start_time
                  )}
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-sl font-medium text-white text-left whitespace-nowrap dark:text-white">
                  Public Sale End Time
                </td>
                <td className="py-4 px-6 text-sl text-white text-right whitespace-nowrap dark:text-white">
                  {convertTimeToUTC(state.data.attributes.public_sale_end_time)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
