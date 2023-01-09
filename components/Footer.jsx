const Footer = () => {
  return (
    <div className=" full-width  relative z-[0]">
      <div className="container mx-auto p-6 pt-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs md:text-sm xl:text-md"> 2022 Kai Ken Finance</p>
        {/* <ul className="flex flex-row">
            <li className="text-xs md:text-sm xl:text-md ml-5">
                <p>Privacy Policy</p>
            </li>
            <li className="text-xs md:text-sm xl:text-md ml-5">
                <p>Terms of use</p>
            </li>
            <li className="text-xs md:text-sm xl:text-md ml-5">
                <p>Cookie Policy</p>
            </li>
        </ul> */}
      </div>
      <div className="footer-rights text-desc">
      <b>All Rights Reserved by KaiKenFinance.com</b>
      </div>
    </div>
  );
};

export default Footer;
