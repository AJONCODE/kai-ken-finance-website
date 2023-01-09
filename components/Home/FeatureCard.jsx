import Image from "next/image";

export default function FeatureCard ({ icons, features, desc }) {
    return (
      <div className="min-w-[312px] md:m-[20px] m-[0px] w-[312px] h-[312px] items-center justify-center flex">
        <div className="h-full w-full relative m-2 bg-cards-bg backdrop-blur-lg border border-[#848484] rounded-2xl ">
          <div className="absolute text-center top-0 w-full h-full flex flex-col items-center justify-center">
            <div className="h1/2 mt-[45px]">
              <Image src={icons} height={119} width={119} className="mx-auto" alt="" />
            </div>
            <div className="text-center mt-[30px] w-[90%] h-1/2">
              <p className="font-regular font-Poppins text-base">
                {features}
              </p>
              <p className="text-xs font-Poppins text-base mt-[20px]">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }