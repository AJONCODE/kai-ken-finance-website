import Image from "next/image";
// import Logo from "../../assets/mtkz_Logo.svg";
import Logo from "../../assets/logo.svg";
import Logo1 from "../../assets/Logo1.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LaunchApp from "../util/LaunchAppButton";
import LaunchPitchDeck from "../util/LaunchPitchDeckButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

import Countdown from "./Countdown";

export default function Jumbotron() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 200,
    });
  }, []);
  return (
    <div className="relative z-[0] w-full pl-0 md:pl-6">
      <br />
      <br />
      <br />
      <br />
      <Countdown customDate={new Date("January 14, 2023 17:30:00")} title="🚀 Countdown to Public sale details 🚀" />
      {/* <Countdown customDate={new Date("January 11, 2023 17:30:00")} /> */}
      <div className="relative pt-15 mx-auto container flex w-full flex-row  items-start justify-center z-[2] ">

        <div className="flex flex-2 flex-col pt-36">
          <h1 className="font-Poppins bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange md:text-5xl font-extrabold text-xl  w-full text-center md:text-left">
            Welcome to future of
          </h1>
          <h1 className="h-[15.5vh] font-Poppins bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange md:text-5xl font-extrabold text-xl md:w-2/3 w-full text-center md:text-left">
            fund raising powered by - {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange ">
              KaiKen
            </span>{" "}
          </h1>
          <p className=" md:text-xl text-wordings-white text-sm font-Poppins font-medium text-center md:text-left">
            What is Kaiken : Meme with utility: Strongest Dog out there.
          </p>
          <p className="mt-0 md:mt-[2px] md:text-xl text-wordings-white text-sm font-Poppins font-medium text-center md:text-left">
            Full scale eco-system to launch your token sales.
          </p>
          <br />
          <p className="mt-0 md:mt-[2px] md:text-xl text-wordings-white text-sm font-Poppins font-medium text-center md:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-comp-orange ">
              Kai Ken
            </span>{" "}
            one of the only japanese native dog breeds, highly intelligent, eager-to-please breed, are devoted and trustworthy guardians of their families.
          </p>
          <p className="mt-0 md:mt-[2px] md:text-xl text-wordings-white text-sm font-Poppins font-medium text-center md:text-left">
            The Kai ken is athletic with a strong drive to hunt. They can even climb trees and will swim rivers while in pursuit of their prey.
          </p>
          <div className="flex md:flex-row md:w-auto w-[100%] justify-center md:justify-start flex-wrap mt-8 ">
            <div className="flex justify-center md:justify-center">
              <LaunchApp page="projects" />
            </div>
            <div className="flex px-3 justify-center md:justify-center md:ml-0 ">
              <LaunchPitchDeck />
            </div>
            {/* <div className="flex px-3 justify-center md:justify-center md:ml-0 ">
                <StakeButton pages="staking" />
              </div> */}
          </div>
          <div className="flex justify-start mt-6 ml-2">
            <p>Join us at</p>
            <a
              href="https://twitter.com/kaikenfinance"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="cursor-pointer ml-4 text-white" />
            </a>
            <a
              href="https://t.me/kaikenfinance"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon className="cursor-pointer ml-4 text-white" />
            </a>
          </div>
        </div>

        <div className="md:block logo-kaiken" style={{
          overflow: 'hidden',
          position: 'relative',
          width : '70%'
        }} >
          <Image src={Logo} alt="" style={{
            opacity: '0.6',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '80%',
            height: 'auto',
            marginTop: '4rem',
          }} />
          <div style={{ position: 'relative' }}>
            <p className="mt-0 md:mt-[2px] md:text-xl text-wordings-white text-sm font-Poppins font-medium text-center" 
            style={{ padding: '0.5rem' , textAlign : "justify" }}>
              A safe haven for all Birds, dogs, dragons and everything where Degens Ape and Earn without fear of rug!!
            </p>
          </div>
        </div>

        <div className="sm:block logo-kaiken-mobile">
          <Image src={Logo} height={300} width={170} alt="" />
        </div>
      </div>
    </div>
  );

  function animations() {
    return (
      <div>
        <svg
          width="750"
          height="750"
          viewBox="0 0 1043 1043"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-div"
        >
          <g opacity="0.5">
            <circle
              opacity="0.45"
              cx="521.646"
              cy="521.113"
              r="113.852"
              transform="rotate(-134.563 521.646 521.113)"
              stroke="url(#paint0_linear_1870_37090)"
              strokeWidth="15"
            />
            <circle
              opacity="0.4"
              cx="521.484"
              cy="521.111"
              r="141.244"
              transform="rotate(-139.609 521.484 521.111)"
              stroke="url(#paint1_linear_1870_37090)"
              strokeWidth="10"
            />
            <circle
              opacity="0.45"
              cx="521.361"
              cy="521.11"
              r="185.438"
              transform="rotate(-134.563 521.361 521.11)"
              stroke="url(#paint2_linear_1870_37090)"
              strokeWidth="15"
            />
            <circle
              opacity="0.45"
              cx="521.819"
              cy="521.115"
              r="245.866"
              transform="rotate(-134.563 521.819 521.115)"
              stroke="url(#paint3_linear_1870_37090)"
              strokeWidth="10"
            />
            <path
              opacity="0.4"
              d="M653.417 280.38C599.134 250.564 536.392 239.958 475.377 250.284C414.362 260.61 358.657 291.262 317.305 337.264"
              stroke="url(#paint4_linear_1870_37090)"
              strokeWidth="20"
            />
            <path
              opacity="0.4"
              d="M666.973 754.594C722.068 720.469 763.261 667.928 783.282 606.247C803.303 544.566 800.865 477.709 776.397 417.477"
              stroke="url(#paint5_linear_1870_37090)"
              strokeWidth="20"
            />
            <path
              opacity="0.4"
              d="M247.069 518.555C246.543 584.695 269.965 648.926 313.011 699.386C356.056 749.845 415.817 783.125 481.257 793.079"
              stroke="url(#paint6_linear_1870_37090)"
              strokeWidth="20"
            />
            <circle
              opacity="0.45"
              cx="521.108"
              cy="521.107"
              r="334.029"
              transform="rotate(-139.609 521.108 521.107)"
              stroke="url(#paint7_linear_1870_37090)"
              strokeWidth="10"
            />
          </g>
          <g opacity="0.5">
            <circle
              opacity="0.45"
              cx="521.675"
              cy="520.168"
              r="127.986"
              transform="rotate(-19.9103 521.675 520.168)"
              stroke="url(#paint8_linear_1870_37090)"
              strokeWidth="8"
              strokeDasharray="4 4"
            />
            <path
              opacity="0.4"
              d="M667.067 452.947C677.621 475.625 682.733 500.454 681.998 525.456C681.263 550.459 674.7 574.945 662.831 596.963C650.963 618.982 634.117 637.925 613.635 652.284C593.154 666.643 569.602 676.021 544.857 679.672"
              stroke="url(#paint9_linear_1870_37090)"
              strokeWidth="20"
            />
            <path
              opacity="0.4"
              d="M489.114 678.113C464.611 673.085 441.621 662.405 421.974 646.923C402.327 631.442 386.566 611.587 375.947 588.94C365.327 566.292 360.143 541.478 360.806 516.473C361.469 491.468 367.962 466.964 379.767 444.911"
              stroke="url(#paint10_linear_1870_37090)"
              strokeWidth="20"
            />
            <path
              opacity="0.4"
              d="M401.946 413.308C418.671 394.708 439.508 380.271 462.798 371.146C486.087 362.02 511.186 358.459 536.095 360.746C561.003 363.032 585.034 371.103 606.273 384.316C627.512 397.529 645.373 415.519 658.432 436.852"
              stroke="url(#paint11_linear_1870_37090)"
              strokeWidth="20"
            />
            <path
              opacity="0.45"
              d="M732 408.88C733.258 411.262 734.481 413.674 735.668 416.116L719.928 423.765C720.478 424.898 721.02 426.037 721.554 427.183C722.087 428.33 722.61 429.478 723.122 430.628L739.11 423.512C740.214 425.992 741.271 428.481 742.284 430.978L726.066 437.553C727.015 439.893 727.92 442.241 728.783 444.595L745.214 438.573C746.149 441.125 747.038 443.684 747.88 446.25L731.254 451.709C732.038 454.098 732.779 456.492 733.477 458.892L750.28 454.003C751.04 456.615 751.753 459.232 752.419 461.853L735.458 466.163C736.078 468.601 736.653 471.043 737.186 473.489L754.285 469.764C754.863 472.415 755.393 475.07 755.877 477.727L738.66 480.862C739.111 483.336 739.518 485.813 739.881 488.291L757.196 485.75C757.59 488.437 757.937 491.124 758.237 493.812L740.845 495.755C741.124 498.251 741.36 500.748 741.552 503.243L759 501.9C759.209 504.605 759.37 507.31 759.485 510.013L742.001 510.756C742.107 513.266 742.171 515.775 742.191 518.282L759.69 518.14C759.712 520.852 759.688 523.561 759.617 526.265L742.123 525.807C742.057 528.317 741.948 530.824 741.797 533.325L759.265 534.382C759.101 537.09 758.891 539.792 758.635 542.488L741.213 540.834C740.976 543.334 740.696 545.829 740.374 548.316L757.729 550.564C757.381 553.252 756.987 555.932 756.548 558.603L739.28 555.765C738.872 558.244 738.423 560.715 737.932 563.176L755.093 566.6C754.563 569.258 753.988 571.906 753.368 574.543L736.332 570.536C735.757 572.981 735.141 575.416 734.484 577.838L751.373 582.421C750.663 585.036 749.91 587.638 749.112 590.227L732.388 585.073C731.648 587.474 730.868 589.861 730.048 592.234L746.587 597.952C745.702 600.513 744.773 603.058 743.802 605.587L727.466 599.311C726.565 601.655 725.625 603.984 724.645 606.297L740.758 613.123C739.702 615.617 738.603 618.094 737.462 620.552L721.589 613.182C720.532 615.458 719.436 617.718 718.301 619.958L733.914 627.863C732.691 630.28 731.426 632.676 730.12 635.051L714.785 626.62C713.576 628.819 712.329 630.999 711.045 633.157L726.084 642.106C724.699 644.432 723.275 646.736 721.81 649.017L707.085 639.561C705.73 641.671 704.338 643.76 702.909 645.826L717.303 655.78C715.763 658.007 714.183 660.209 712.565 662.387L698.52 651.947C697.025 653.958 695.494 655.946 693.928 657.908L707.607 668.823C705.92 670.938 704.194 673.026 702.431 675.087L689.134 663.71C687.505 665.614 685.841 667.493 684.142 669.345L697.04 681.172C695.212 683.166 693.347 685.131 691.445 687.067L678.961 674.803C677.207 676.589 675.42 678.347 673.599 680.077L685.654 692.763C683.693 694.626 681.697 696.459 679.665 698.261L668.054 685.167C666.181 686.829 664.274 688.462 662.336 690.065L673.489 703.55C671.408 705.271 669.293 706.961 667.144 708.617L656.461 694.756C654.479 696.284 652.465 697.782 650.421 699.248L660.622 713.467C658.425 715.044 656.194 716.587 653.931 718.096L644.223 703.536C642.144 704.922 640.035 706.277 637.897 707.599L647.102 722.483C644.805 723.903 642.478 725.289 640.119 726.639L631.425 711.451C629.25 712.696 627.045 713.909 624.812 715.089L632.986 730.562C630.604 731.821 628.191 733.044 625.75 734.23L618.101 718.491C616.968 719.041 615.829 719.583 614.682 720.117C613.536 720.65 612.388 721.173 611.237 721.685L618.354 737.673C615.874 738.776 613.385 739.834 610.888 740.847L604.313 724.629C601.972 725.578 599.625 726.483 597.271 727.346L603.293 743.777C600.741 744.712 598.182 745.601 595.616 746.443L590.157 729.816C587.768 730.601 585.373 731.342 582.974 732.04L587.863 748.843C585.251 749.603 582.634 750.316 580.012 750.982L575.703 734.021C573.265 734.641 570.822 735.216 568.377 735.749L572.102 752.848C569.451 753.426 566.796 753.956 564.139 754.44L561.004 737.223C558.53 737.674 556.053 738.081 553.575 738.444L556.116 755.759C553.429 756.153 550.742 756.5 548.054 756.8L546.111 739.408C543.614 739.687 541.118 739.923 538.622 740.115L539.966 757.563C537.261 757.772 534.556 757.933 531.853 758.048L531.11 740.564C528.599 740.67 526.09 740.734 523.584 740.754L523.726 758.253C521.014 758.275 518.305 758.251 515.601 758.18L516.059 740.686C513.549 740.62 511.042 740.511 508.541 740.36L507.484 757.828C504.776 757.664 502.074 757.454 499.378 757.198L501.032 739.777C498.531 739.539 496.037 739.259 493.549 738.937L491.302 756.292C488.614 755.944 485.934 755.55 483.263 755.111L486.101 737.843C483.622 737.436 481.151 736.986 478.69 736.495L475.266 753.657C472.607 753.126 469.96 752.551 467.323 751.931L471.329 734.896C468.885 734.321 466.45 733.704 464.028 733.047L459.445 749.936C456.83 749.227 454.227 748.473 451.639 747.675L456.792 730.951C454.392 730.212 452.005 729.432 449.631 728.611L443.914 745.151C441.353 744.265 438.808 743.337 436.279 742.365L442.555 726.029C440.21 725.129 437.882 724.188 435.569 723.209L428.742 739.322C426.248 738.266 423.772 737.166 421.314 736.025L428.684 720.153C426.407 719.096 424.148 718 421.907 716.865L414.002 732.478C411.586 731.255 409.19 729.99 406.815 728.684L415.246 713.349C413.047 712.14 410.867 710.893 408.708 709.608L399.76 724.647C397.433 723.263 395.129 721.839 392.849 720.374L402.305 705.649C400.194 704.293 398.105 702.901 396.039 701.473L386.086 715.867C383.859 714.326 381.656 712.747 379.479 711.129L389.919 697.084C387.908 695.589 385.92 694.058 383.957 692.492L373.042 706.171C370.928 704.484 368.839 702.758 366.779 700.995L378.156 687.698C376.252 686.069 374.373 684.404 372.521 682.706L360.693 695.604C358.699 693.776 356.734 691.911 354.798 690.009L367.062 677.525C365.277 675.771 363.518 673.984 361.788 672.163L349.102 684.218C347.239 682.257 345.406 680.261 343.605 678.229L356.698 666.618C355.037 664.745 353.404 662.838 351.801 660.9L338.315 672.053C336.594 669.972 334.905 667.857 333.248 665.708L347.109 655.025C345.581 653.043 344.084 651.029 342.617 648.985L328.398 659.187C326.821 656.989 325.278 654.758 323.769 652.495L338.33 642.787C336.944 640.708 335.589 638.599 334.266 636.461L319.383 645.666C317.963 643.369 316.577 641.042 315.227 638.683L330.414 629.989C329.169 627.814 327.956 625.609 326.777 623.377L311.303 631.55C310.044 629.168 308.821 626.756 307.635 624.314L323.375 616.665C322.824 615.532 322.282 614.393 321.749 613.247C321.215 612.1 320.693 610.952 320.181 609.802L304.193 616.918C303.089 614.438 302.031 611.949 301.019 609.452L317.237 602.877C316.288 600.537 315.382 598.189 314.52 595.835L298.088 601.857C297.153 599.305 296.265 596.746 295.422 594.18L312.049 588.721C311.265 586.332 310.524 583.938 309.825 581.538L293.022 586.427C292.262 583.815 291.55 581.198 290.883 578.577L307.844 574.267C307.225 571.829 306.649 569.387 306.116 566.941L289.017 570.666C288.44 568.015 287.909 565.36 287.426 562.703L304.642 559.568C304.192 557.094 303.785 554.617 303.421 552.139L286.107 554.68C285.713 551.993 285.366 549.306 285.065 546.618L302.457 544.675C302.178 542.179 301.943 539.682 301.751 537.187L284.302 538.53C284.094 535.825 283.933 533.12 283.818 530.417L301.302 529.674C301.195 527.164 301.132 524.655 301.112 522.148L283.612 522.29C283.59 519.578 283.615 516.869 283.686 514.165L301.18 514.623C301.245 512.113 301.354 509.606 301.506 507.105L284.038 506.048C284.201 503.34 284.411 500.638 284.667 497.942L302.089 499.596C302.326 497.096 302.606 494.601 302.929 492.114L285.574 489.866C285.922 487.178 286.316 484.498 286.755 481.827L304.023 484.665C304.43 482.186 304.88 479.715 305.371 477.254L288.209 473.83C288.74 471.172 289.315 468.524 289.935 465.887L306.97 469.894C307.545 467.449 308.162 465.014 308.819 462.592L291.93 458.009C292.639 455.394 293.393 452.792 294.191 450.203L310.915 455.357C311.654 452.956 312.434 450.569 313.255 448.196L296.716 442.478C297.601 439.917 298.529 437.372 299.501 434.843L315.837 441.119C316.737 438.775 317.678 436.446 318.658 434.133L302.544 427.307C303.601 424.813 304.7 422.336 305.841 419.878L321.713 427.248C322.771 424.972 323.867 422.712 325.001 420.472L309.388 412.567C310.611 410.15 311.876 407.754 313.182 405.379L328.517 413.81C329.726 411.611 330.973 409.431 332.258 407.273L317.219 398.324C318.603 395.998 320.028 393.694 321.492 391.413L336.218 400.869C337.573 398.759 338.965 396.67 340.394 394.604L326 384.65C327.54 382.423 329.119 380.221 330.738 378.043L344.783 388.483C346.278 386.472 347.808 384.484 349.375 382.522L335.695 371.607C337.383 369.492 339.108 367.404 340.872 365.343L354.168 376.72C355.798 374.816 357.462 372.937 359.16 371.085L346.262 359.258C348.091 357.264 349.956 355.299 351.857 353.363L364.341 365.627C366.095 363.841 367.883 362.083 369.704 360.353L357.649 347.667C359.61 345.804 361.606 343.971 363.637 342.169L375.248 355.263C377.122 353.601 379.028 351.968 380.966 350.365L369.813 336.88C371.894 335.159 374.01 333.469 376.159 331.813L386.842 345.674C388.824 344.146 390.837 342.648 392.881 341.182L382.68 326.963C384.878 325.386 387.109 323.843 389.372 322.334L399.079 336.894C401.158 335.508 403.267 334.153 405.406 332.831L396.201 317.947C398.497 316.527 400.825 315.141 403.184 313.791L411.877 328.979C414.053 327.734 416.257 326.521 418.49 325.341L410.316 309.868C412.699 308.609 415.111 307.386 417.552 306.2L425.202 321.939C426.334 321.389 427.474 320.847 428.62 320.313C429.766 319.78 430.915 319.257 432.065 318.745L424.949 302.757C427.429 301.654 429.918 300.596 432.415 299.583L438.99 315.801C441.33 314.852 443.678 313.947 446.031 313.084L440.01 296.653C442.562 295.718 445.121 294.829 447.686 293.987L453.145 310.614C455.534 309.829 457.929 309.088 460.328 308.39L455.44 291.587C458.051 290.827 460.668 290.114 463.29 289.448L467.6 306.409C470.038 305.789 472.48 305.214 474.925 304.681L471.201 287.582C473.852 287.004 476.506 286.474 479.163 285.99L482.298 303.207C484.773 302.756 487.25 302.349 489.728 301.986L487.187 284.671C489.873 284.277 492.561 283.93 495.249 283.63L497.192 301.022C499.688 300.743 502.184 300.507 504.68 300.315L503.336 282.867C506.042 282.658 508.747 282.497 511.449 282.382L512.192 299.866C514.703 299.76 517.212 299.696 519.718 299.676L519.576 282.177C522.288 282.155 524.997 282.179 527.702 282.25L527.243 299.744C529.754 299.81 532.26 299.919 534.762 300.07L535.819 282.602C538.526 282.766 541.229 282.976 543.924 283.232L542.27 300.653C544.771 300.891 547.266 301.171 549.753 301.493L552.001 284.138C554.689 284.486 557.369 284.88 560.04 285.319L557.202 302.587C559.681 302.994 562.151 303.444 564.612 303.935L568.037 286.773C570.695 287.304 573.343 287.879 575.979 288.499L571.973 305.534C574.418 306.109 576.852 306.726 579.275 307.383L583.857 290.494C586.473 291.203 589.075 291.957 591.664 292.755L586.51 309.479C588.91 310.218 591.298 310.998 593.671 311.819L599.389 295.279C601.95 296.165 604.495 297.093 607.024 298.065L600.748 314.401C603.092 315.301 605.421 316.242 607.734 317.221L614.56 301.108C617.054 302.164 619.531 303.264 621.988 304.405L614.619 320.277C616.895 321.334 619.155 322.43 621.395 323.565L629.3 307.952C631.716 309.175 634.113 310.44 636.488 311.746L628.057 327.081C630.256 328.29 632.435 329.537 634.594 330.822L643.543 315.783C645.869 317.167 648.173 318.591 650.454 320.056L640.998 334.781C643.108 336.137 645.197 337.529 647.263 338.957L657.216 324.563C659.443 326.103 661.646 327.683 663.823 329.301L653.384 343.346C655.395 344.841 657.382 346.372 659.345 347.938L670.26 334.259C672.375 335.946 674.463 337.672 676.524 339.435L665.147 352.732C667.051 354.361 668.93 356.026 670.782 357.724L682.609 344.826C684.603 346.654 686.568 348.519 688.504 350.421L676.24 362.905C678.026 364.659 679.784 366.446 681.514 368.267L694.2 356.212C696.063 358.173 697.896 360.169 699.698 362.201L686.604 373.812C688.266 375.685 689.899 377.592 691.502 379.53L704.987 368.377C706.708 370.458 708.398 372.573 710.054 374.722L696.193 385.405C697.721 387.387 699.219 389.401 700.685 391.445L714.904 381.243C716.481 383.441 718.025 385.672 719.533 387.935L704.973 397.643C706.359 399.722 707.714 401.831 709.036 403.969L723.92 394.764C725.34 397.061 726.726 399.388 728.076 401.747L712.888 410.441C714.133 412.616 715.346 414.821 716.526 417.053L732 408.88Z"
              stroke="url(#paint12_linear_1870_37090)"
              strokeWidth="35"
              strokeDasharray="8 8"
            />
            <circle
              opacity="0.45"
              cx="521.065"
              cy="519.989"
              r="304.496"
              transform="rotate(-19.9103 521.065 519.989)"
              stroke="url(#paint13_linear_1870_37090)"
              strokeWidth="30"
              strokeDasharray="8 8"
            />
            <circle
              opacity="0.45"
              cx="522.519"
              cy="520.961"
              r="355.324"
              transform="rotate(-19.9103 522.519 520.961)"
              stroke="url(#paint14_linear_1870_37090)"
              strokeWidth="20"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1870_37090"
              x1="478.93"
              y1="383.743"
              x2="548.829"
              y2="599.021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1870_37090"
              x1="470.006"
              y1="355.563"
              x2="554.243"
              y2="615"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1870_37090"
              x1="453.447"
              y1="302.705"
              x2="564.579"
              y2="644.976"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1870_37090"
              x1="433.514"
              y1="237.134"
              x2="578.013"
              y2="682.171"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1870_37090"
              x1="372.747"
              y1="264.211"
              x2="529.372"
              y2="365.441"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1870_37090"
              x1="616.802"
              y1="557.879"
              x2="751.067"
              y2="653.967"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_1870_37090"
              x1="191.8"
              y1="539.401"
              x2="388.139"
              y2="504.8"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_1870_37090"
              x1="401.77"
              y1="137.327"
              x2="597.05"
              y2="738.764"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_1870_37090"
              x1="475.216"
              y1="370.76"
              x2="551.24"
              y2="604.903"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_1870_37090"
              x1="536.056"
              y1="502.221"
              x2="632.453"
              y2="620.685"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_1870_37090"
              x1="333.444"
              y1="447.719"
              x2="484.487"
              y2="482.283"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_1870_37090"
              x1="457.943"
              y1="362.695"
              x2="539.642"
              y2="472.333"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_1870_37090"
              x1="332.031"
              y1="311.312"
              x2="634.449"
              y2="636.245"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_1870_37090"
              x1="408.602"
              y1="158.32"
              x2="592.632"
              y2="725.106"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_1870_37090"
              x1="393.924"
              y1="107.413"
              x2="604.351"
              y2="755.499"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B83EDE" />
              <stop offset="1" stopColor="#651FFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
}
