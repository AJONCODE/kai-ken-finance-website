import React, { useEffect, useState } from "react";
import Image from "next/image";
import ListInfo from "../../util/List";
import Link from "next/link";
import img from "../../../assets/offf1.png";

const IDOSCard = (props) => {
  const [seconds, setS] = useState(0);
  const [minutes, setM] = useState(0);
  const [hours, setH] = useState(0);
  const [days, setD] = useState(0);
  const [saleState, setSaleState] = useState(0);

  let id;

  const countdown = () => {
    id = setInterval(() => {
      var saleDate = new Date();
      var currentDate = new Date();

      var stakeStart = new Date(props.info.stake_start_time * 1000);
      var publicEnd = new Date(props.info.public_sale_end_time * 1000);

      if (currentDate < stakeStart) saleDate = stakeStart;
      else if (currentDate >= stakeStart && currentDate < publicEnd)
        saleDate = publicEnd;
      else if (currentDate >= publicEnd) {
        setTimerValues(0, 0, 0, 0);
        return;
      }

      var dateFuture = saleDate;
      var dateNow = new Date();

      var seconds = Math.floor((dateFuture - dateNow) / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);

      hours = hours - days * 24;
      minutes = minutes - days * 24 * 60 - hours * 60;
      seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

      setTimerValues(days, hours, minutes, seconds);
    }, 1000);
  };

  useEffect(() => {
    countdown();

    return () => {
      clearInterval(id);
    };
  }, []);

  function SetCurrentSaleState() {
    let currentTime = Math.floor(Date.now() / 1000);

    if (currentTime < props.info.stake_start_time) {
      setSaleState(0);
    } else if (
      currentTime >= props.info.stake_start_time &&
      currentTime <= props.info.stake_end_time
    ) {
      setSaleState(1);
    } else if (
      currentTime > props.info.stake_end_time &&
      currentTime <= props.info.public_sale_start_time
    ) {
      setSaleState(2);
    } else if (
      currentTime > props.info.public_sale_start_time &&
      currentTime <= props.info.public_sale_end_time
    ) {
      setSaleState(3);
    } else if (currentTime > props.info.public_sale_end_time) {
      setSaleState(4);
    }
  }

  const getSaleType = () => {
    let currentTime = Math.floor(Date.now() / 1000);

    if (
      currentTime >= props.info.stake_start_time &&
      currentTime <= props.info.stake_end_time
    ) {
      return (
        <div className="text-white ml-3 text-xs ">Stake sale is Live </div>
      );
    } else if (
      currentTime > props.info.public_sale_start_time &&
      currentTime <= props.info.public_sale_end_time
    ) {
      return (
        <div className="text-white ml-3 text-xs ">Public Sale is Live </div>
      );
    }
  };

  return (
    <div className="md:mx-1 lg:mx-2 max-w-sm overflow-hidden bg-cards-bg border border-staking-border rounded-xl w-full h-auto ">
      <CardHeader />
      <CardTimer
          getDays={getDays}
          getHours={getHours}
          getMinutes={getMinutes}
          getSeconds={getSeconds}
          saleState={saleState}
        />

      <LogoImage />
      <CardTitle />
      {/* <CardSaleTypeAndLiveInfo getProjectType={getProjectType} /> */}
      <CardDescription id={props.id} saleState={saleState} />
      <div className="flex flex-col mt-[-10px]">
        <ListInfo
          title={"Total Sale"}
          value={"$" + props.info.total_sale.toLocaleString()}
          valTextSize="text-2xl"
        />
        <ListInfo
          title={"Public Sale"}
          value={"$" + props.info.public_per_wallet}/*replace this with public sale in future*/
          valTextSize="text-2xl"
        />
      </div>
      <CardFooterButton id={props.id} saleState={saleState} />
    </div>
  );

  function getProjectType() {
    return props.info.stake_type === true ? "Staking" : "WhileListed";
  }

  function getDays() {
    return days;
  }

  function getHours() {
    return hours;
  }

  function getMinutes() {
    return minutes;
  }

  function getSeconds() {
    return seconds;
  }

  function setTimerValues(days, hours, minutes, seconds) {
    setS(seconds);
    setM(minutes);
    setH(hours);
    setD(days);
  }

  function GetBtnLabel(saleState) {
      return "View more information";
  }

  function GetProjectHLink(saleState, id) {
    if (saleState == 0 || saleState == 1 || saleState == 3 || saleState == 4) {
      return "/projects/" + id;
    }
    return "";
  }

  function CardFooterButton(props) {
    return (
      <Link
      className="cursor-pointer"
        href={{
          pathname: GetProjectHLink(props.saleState, props.id),
        }}
        scroll={false}
      >
        <div className="cursor-pointer flex flex-row justify-center align-middle w-full h-[60px] bg-gradient-to-r from-primary-red to-comp-orange mt-6">
          <h1 className="font-bold font-Poppins text-sm text-justify pt-4">{GetBtnLabel(props.saleState)}</h1>
        </div>
      </Link>
    );
  }

  function CardTimer({ getDays, getHours, getMinutes, getSeconds, saleState }) {
    SetCurrentSaleState();
    if (saleState == 4) {
      return (
        <div className="mt-[-8px] w-full h-[24px] bg-[#656565] flex flex-col justify-center">
          <h1 className="font-Poppins font-regular text-[#C8C8C8] align-middle text-sm relative left-24">
            Sales complete
          </h1>
        </div>
      );
    } else if (saleState == 1 || saleState == 2 || saleState == 3)
    {
      return (
        <div className="mt-[-8px] w-full h-[24px] flex flex-row bg-[#656565] justify-center text-center align-middle">
          <div className="relative top-1 pt-[0.1em]">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-75 left-[-2px] top-[-.01em]"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400 border border-white"></span>
            </span>
          </div>
          <p className="font-Poppins font-regular text-sm align-middle text-white px-3 pt-[0.1em]"> Sales is live </p>
        </div>
      );
    }
    else if(saleState == 0){
      return (
        <div className="mt-[-8px] w-full h-[24px] flex flex-row bg-[#656565] justify-between">
          <p className="mt-[2px] font-Poppins font-regular text-sm align-middle text-[#C8C8C8] relative left-24"> Sales opens in </p>
          <p className="mt-[2px] font-Poppins font-regular text-sm align-middle text-[#C8C8C8]"> {getDays()}d {getHours()}h {getMinutes()}m {getSeconds()}s</p>
        </div>
      );
    }
  }

  function LogoImage({}){
    return (
      <div className="relative bg-logo-color drop-shadow backdrop-blur-sm z-9 w-[70px] h-[70px] mt-[-55px] left-[16px] border-[2px] border-staking-border rounded-lg flex items-center justify-center">
        <Image
         className="object-cover"
         src={img} /*replace this with props.info.logoImage in future */
         alt="project-banner"
         width={30}
         height={30}
        />
      </div>
      );
  }

  function CardTotalSaleChip() {
    return (
      <div className="absolute text-sm top-7 right-6 text-right px-2 rounded-full py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-100  px-3 py-1 ">
        Total Sale ${props.info.total_sale.toLocaleString()}
      </div>
    );
  }

  function CardDescription(props2){
    return(
      <div>
        <div className="w-full pr-3 h-[36px] overflow-hidden font-Poppins font-regular text-sm ml-4 mt-1">
          <p>{props.info.content.toLocaleString()} </p>
        </div>
        <p className="relative bg-cards-bg left-36 top-[-18px]"> ...
          {/* <Link
            href={{
              //pathname: GetProjectHLink(props.saleState, props.id),
            }}
            scroll={false}
          > */}
            <a className="cursor-pointer font-Poppins font-regular text-sm text-[#A85DF4]" href={GetProjectHLink(props2.saleState, props2.id)}>view more</a>
          {/* </Link> */}
        </p>
      </div>
    );
  }

  function CardBannerImage() {
    return (
      <Image
        className="object-cover"
        src={props.info.cover_image}
        alt="project-banner"
        width={390}
        height={180}
      />
    );
  }

  function CardHeader({}) {
    return (
        <CardBannerImage />
    );
  }

  function CardTitle() {
    return (
      <div className="px-4 pt-4 flex flex-row  place-content-between">
        <div className=" font-Poppins font-bold text-lg text-white">
          {props.info.name}
        </div>
        <div className=" font-Poppins text-white font-regular text-base">
          ${props.info.token_symbol}
        </div>
      </div>
    );
  }
};

export default IDOSCard;
