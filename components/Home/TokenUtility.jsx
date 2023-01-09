import Image from "next/image";
// import tuTitle from "../../assets/tuTitle.png";
// import tu1 from "../../assets/tu1.png";
// import tu2 from "../../assets/tu2.png";
// import tu3 from "../../assets/tu3.png";
// import tu4 from "../../assets/tu4.png";
// import tu5 from "../../assets/tu5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function TokenUtility() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    //  <div className="pt-10 bg-grad mt-10">
    //     {/* <div data-aos="fade-right" className="ml-10 mt-10">
    //      <Image src={tuTitle} alt="connect-icon" height={40} width={340} />
    //    </div>
    //    <div 
    // //     data-aos="fade-up"
    // //     className="font-hanuman flex md:flex-row flex-col md:justify-between justify-between items-center p-6 h-auto w-full mt-10 px-28"
    // //   >
    // //     <div className="flex flex-col justify-center items-center w-32  md:mb-0 mb-20">
    // //       <Image src={tu1} alt="connect-icon" />
    // //       <p className="text-center mt-6 w-48 md:h-48 ">
    // //         Top holders become part of community council VIP group
    // //       </p>
    // //     </div>
    // //     <div className="flex flex-col justify-center items-center w-28  md:mb-0 mb-20">
    // //       <Image src={tu2} alt="connect-icon" />
    // //       <p className="text-center mt-6 w-48 md:h-48 ">
    // //         Get allocations to private and public token sales of top gamefi and
    // //         metaverse projects
    // //       </p>
    // //     </div>
    // //     <div className="flex flex-col justify-center items-center w-28 md:mb-0 mb-20">
    // //       <Image src={tu3} alt="connect-icon" />
    // //       <p className="text-center mt-6 w-48 md:h-48 ">Staking token</p>
    // //     </div>
    // //     <div className="flex flex-col justify-center items-center w-28  md:mb-0 mb-20">
    // //       <Image src={tu4} alt="connect-icon" />
    // //       <p className="text-center mt-6 w-48 md:h-48 ">
    // //         Deflationary from revenue, investment and fees
    // //       </p>
    // //     </div>
    // //     <div className="flex flex-col justify-center items-center w-28  md:mb-0 mb-20">
    // //       <Image src={tu5} alt="connect-icon" />
    // //       <p className="text-center mt-6 w-48  md:h-48 ">
    // //         Governance vote for DAO
    // //       </p>
    // //     </div>
    // //   </div> */}
    //  </div>
    <div></div>
  );
}
