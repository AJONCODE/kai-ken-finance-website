import React, { useEffect, useState } from "react";
import Image from "next/image";
import to1 from "../../assets/to1.svg";
import to2 from "../../assets/to2.svg";
import to3 from "../../assets/to3.svg";
import to4 from "../../assets/to4.svg";
import to5 from "../../assets/to5.svg";
import to6 from "../../assets/to6.svg";
import to7 from "../../assets/to7.svg";
import to8 from "../../assets/to8.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut,Pie } from "react-chartjs-2";
import { dialogContentTextClasses } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

export const chartData = {
  labels: [
    "Private",
    "Public",
    "Ecosystem",
    "Liquidity Provider",
    "Marketing and Legal",
    "Advisor",
    "Team",
    "Exchange Listing",
  ],
  datasets: [
    {
      label: "Token Metrics",
      data: [55, 5, 7, 25, 4, 2, 2],
      backgroundColor: [
        "#F80759",
        "#00778B",
        "#A85DF4",
        "#0068DE",
        "#F1A6FB",
        "#B83EDE",
        "#651FFF",
        "#284580",
      ],
      borderColor: [
        "#F80759",
        "#00778B",
        "#A85DF4",
        "#0068DE",
        "#F1A6FB",
        "#B83EDE",
        "#651FFF",
        "#284580",
      ],
      borderWidth: 1,
    },
  ],
  options: {
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  },
};
const options = {
  legend: {
    display: false,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: 5
    }
  },
  plugins:{
    tooltip: {
      callbacks: {
          label: function(context) {

            let label = context.label + " : " + context.formattedValue;

            if (label) {
                label += '%';
            }
            return label;
          }
      }
    },
  },
};

const data = [
  {
    icon: to1,
    title: "Private",
    desc: "59,000,000,000",
  },
  {
    icon: to2,
    title: "Public",
    desc: "5,000,000,000",
  },
  {
    icon: to3,
    title: "Ecosystem",
    desc: "3,000,000,000",
  },
  {
    icon: to4,
    title: "Liquidity Provider",
    desc: "25,000,000,000",
  },
  {
    icon: to5,
    title: "Marketing and Legal",
    desc: "4,000,000,000",
  },
  {
    icon: to6,
    title: "Advisor",
    desc: "2,000,000,000",
  },
  {
    icon: to7,
    title: "Team",
    desc: "2,000,000,000 ",
  },
  // {
  //   icon: to8,
  //   title: "Exchange Listing",
  //   desc: "500,000,000,000,000,000 ",
  // },
];

function BuyMeta({ address, signer }) {
  let tokenInfo = data;
  return (
    <>
      <div id="tokenomics" className=" relative z-[0] font-Poppins pt-24">
        <div data-aos="fade-up" className="relative container mx-auto z-[2] md:pt-0 pt-[100px]">
          <h1 className="text-center font-extrabold font-Poppins text-4xl pl-0 md:pl-3">
            Tokenomics
          </h1>

          <div className="relative text-center mt-3 flex align-middle justify-center">
            <p className="text-center text-xl w-auto font-bold text-white flex md:flex-row flex-col">Total Tokens: <span className="font-semibold font-Poppins text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange pl-0 md:pl-1">100,000,000,000</span></p>
          </div>
          <div className="md:flex hidden justify-between flex-row items-center md:justify-center md:w-auto overflow-scroll md:overflow-visible md:mt-[60px] mt-[30px] ">
            {tokenInfo.slice(0, 4).map((v, i) => {
              return (
                <div
                  className="flex md:w-1/4 mx-2 md:mt-0 mt-12 "
                  key={i}
                >
                  <div className="h-[280px] flex flex-col justify-center w-[350px] md:w-[370px] bg-[#FFFFFF1A] border border-[#848484] rounded-2xl mx-2	">
                    <div className=" mx-auto text-center">
                      <Image
                        src={v.icon}
                        height={80}
                        width={80}
                        alt=""
                        className=" object-contain mx-auto"
                      />
                    </div>
                    <div className="text-center p-4 ">
                      <p className="text-gray-100 text-lg tracking-widest	">
                        {v.title}
                      </p>
                      <p className="text-gray-100 text-lg p-4">
                        {v.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
          <div className="hidden md:flex flex-col md:flex-row items-center justify-center md:w-auto w-[100vw] md:mt-[60px] ">
            {tokenInfo.slice(4, 8).map((v, i) => {
              return (
                <div
                  className="relative  w-[370px] mx-2  md:mt-0 mt-12"
                  key={i}
                >
                  <div className="h-[280px] bg-[#FFFFFF1A] border border-[#848484] rounded-2xl mx-2	"></div>
                  <div className="absolute top-[50px] z-10 left-0 right-0  mx-auto text-center">
                    <Image
                      src={v.icon}
                      height={80}
                      width={80}
                      alt=""
                      className=" object-contain mx-auto"
                    />
                  </div>
                  <div className="text-center p-4 absolute top-[140px] right-0 left-0 bottom-0">
                    <p className="text-gray-100 text-lg tracking-widest	">
                      {v.title}
                    </p>
                    <p className="text-gray-100 text-lg p-4">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:hidden no-wrap justify-between flex flex-row items-center md:justify-center md:w-auto overflow-scroll md:overflow-visible md:mt-[60px] mt-[30px] ">
            {tokenInfo.slice(0, 8).map((v, i) => {
              return (
                <div
                  className="flex md:w-[370px] mx-2 md:mt-0 mt-12 pb-4"
                  key={i}
                >
                  <div className="h-[280px] flex flex-col justify-center w-[350px] md:w-[370px] bg-[#FFFFFF1A] border border-[#848484] rounded-2xl mx-2	">
                    <div className=" mx-auto text-center">
                      <Image
                        src={v.icon}
                        height={80}
                        width={80}
                        alt=""
                        className=" object-contain mx-auto"
                      />
                    </div>
                    <div className="text-center p-4 ">
                      <p className="text-gray-100 text-lg tracking-widest	">
                        {v.title}
                      </p>
                      <p className="text-gray-100 text-lg p-4">
                        {v.desc}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        <div className="relative container mx-auto z-[2] py-[100px]">
          <h1 className="text-center font-extrabold font-Poppins text-4xl ">
            Token Metrics
          </h1>
          <div className="flex md:flex-row flex-col align-middle items-center justify-center mt-9">
            <div className="md:w-[500px] w-[100vw] h-[500px] ">
              <Pie data={chartData} options={options} />
            </div>
          </div>
          <p className="flex md:flex-row flex-col align-middle items-center justify-center mt-0 md:mt-9">Only 4% of Total Tokens for Team and Advisors</p>
        </div>
      </div>
    </>
  );

}

export default BuyMeta;
