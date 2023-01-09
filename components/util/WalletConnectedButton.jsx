import React from "react";

const FilledButton = (props) => {
  return props.connected ? (
    <div onClick={props.onClick} className="flex w-[152px] h-[36px] bg-[#F0F0F01A] rounded-md ">
      <h1 className="font-bold font-Poppins text-xs text-justify text-gray-500 mx-auto my-auto align-middle">Wallet connected</h1>
    </div>): (
      <div onClick={props.onClick} className="flex w-[152px] h-[36px] bg-[#F0F0F01A] rounded-md ">
      <h1 className="font-bold font-Poppins text-xs text-justify mx-auto my-auto text-gray-500  align-middle">Connect Wallet</h1>
      </div>
    )
};

export default FilledButton;
