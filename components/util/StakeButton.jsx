import React from "react";
import Link from "next/link"

const StakeButton = (props) => {
  return (
    <Link href="/staking/" passHref>
      <div className="flex w-[172px] h-[36px] border border-white rounded-[5px] ">
        <h1 className="font-regular font-Poppins text-sm text-justify mx-auto my-auto align-middle cursor-pointer">Stake $Token</h1>
      </div>
    </Link>
  );
};

export default StakeButton;
