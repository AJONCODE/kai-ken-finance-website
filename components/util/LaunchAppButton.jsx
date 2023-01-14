import React from "react";
import Link from "next/link"

const LaunchApp = (props) => {
  return (
    <Link href="https://app.thekaiken.com/" passHref>
      <a target="_blank">
        <div className="flex w-[172px] h-[36px] bg-[rgba(186,111,74,0.70)] rounded-md">
          <h1 className="font-bold font-Poppins text-sm text-sm text-justify mx-auto my-auto align-middle ">Launch Application</h1>
        </div>
      </a>
    </Link>
  );
};

export default LaunchApp;
