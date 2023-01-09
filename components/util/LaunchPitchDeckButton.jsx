import React from "react";
import Link from "next/link"

const LaunchPitchDeck = (props) => {
  return (
     <Link href="https://docsend.com/view/d673mk8smp8nweke" passHref>
      <a target="_blank">
        {/* <div className="flex w-[172px] h-[36px] bg-[#c04dc9] rounded-md"> */}
        <div className="flex w-[172px] h-[36px] bg-[rgba(186,111,74,0.70)] rounded-md">

          <h1 className="font-bold font-Poppins text-sm  text-justify mx-auto my-auto align-middle ">Pitch Deck</h1>
        </div>
      </a>
     </Link>
  );
};

export default LaunchPitchDeck;
