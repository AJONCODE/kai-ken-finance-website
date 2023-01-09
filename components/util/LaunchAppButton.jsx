import React from "react";
import Link from "next/link"

const LaunchApp = (props) => {
  return (
    <Link href="https://app.kaikenfinance.com" passHref>
      <a target="_blank">
        <div className="flex w-[172px] h-[36px] bg-[#F0F0F01A] rounded-md">
          <h1 className="font-bold font-Poppins text-sm text-gray-500 text-justify mx-auto my-auto align-middle ">Launch Application</h1>
        </div>
      </a>
    </Link>
  );
};

export default LaunchApp;
