export default function Apply() {
  return (
    <div className="z-[9] relative pt-20 md:p-10 p-5 md:h-[400px] h-auto flex justify-center items-center ">
      <div className=" absolute top-0 pt-10 pb-10 h-auto w-full "></div>
      <div className=" flex flex-col justify-center items-center md:w-1/2 z-[2]">
        <h1 className="text-center font-extrabold font-Poppins text-4xl text-center text-[dusty-white] ">
          Apply to Launch Your Projects
        </h1>
        <p className="text-center mt-4 md:mb-0 mb-4">
          We look for strong teams with a unique and innovative vision in the
          crypto space. If you think you are one of these projects, apply below!{" "}
        </p>
        <button className="bg-btn mt-5 md:mt-10 ">
          <a href="https://app.kaikenfinance.com/ido-apply" target="_blank">Apply Now</a>
        </button>
      </div>
    </div>
  );
}
