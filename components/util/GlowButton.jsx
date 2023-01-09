import React from "react";

const GlowButton = (props) => {
  
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 347 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.disabled ? "" : "cursor-pointer"}`}
    >
      <g id="Component 1">
        <g id="Vector 1" filter="url(#filter0_f_1395_28441)">
          <path
            d="M21 83L57.9147 21H326L295.742 83H21Z"
            fill={`${props.disabled ?"url(#paint6_linear_1395_28441)" : "url(#paint0_linear_1395_28441)"}`}
          />
          <path
            d="M21 83L57.9147 21H326L295.742 83H21Z"
            stroke={`${props.disabled ?"url(#paint7_linear_1395_28441)" : "url(#paint1_linear_1395_28441)"}`}
          />
        </g>
        <path
          id="Path 1775"
          d="M222 79H40.217C38.7721 78.9999 37.3527 78.6188 36.102 77.8952C34.8513 77.1717 33.8136 76.1311 33.0934 74.8786C32.3732 73.626 31.9961 72.2058 32 70.761C32.004 69.3162 32.3888 67.898 33.1158 66.6494L50.7867 36.3012C53.1422 32.2552 56.5178 28.8977 60.5767 26.5637C64.6355 24.2297 69.2355 23.001 73.9177 23H117.17"
          stroke="url(#paint2_linear_1395_28441)"
          stopwidth="3.571"
          stoplinecap="round"
          stoplinejoin="round"
        />
        <path
          id="Path 1777"
          d="M136 23H304.753C306.203 22.9999 307.628 23.3808 308.883 24.1043C310.138 24.8278 311.18 25.8683 311.902 27.1209C312.625 28.3734 313.004 29.7938 313 31.2387C312.996 32.6835 312.61 34.1019 311.88 35.3506L294.148 65.6987C291.784 69.7449 288.397 73.1026 284.324 75.4366C280.251 77.7706 275.634 78.9993 270.936 79H241.191"
          stroke={`${props.disabled ? "url(#paint8_linear_1395_28441)" : "url(#paint4_linear_1395_28441)"}`}
          stopwidth="1.786"
          stoplinecap="round"
          stoplinejoin="round"
        />
        <path
          id="Path 1778"
          d="M222 79H40.217C38.7721 78.9999 37.3527 78.6188 36.102 77.8952C34.8513 77.1717 33.8136 76.1311 33.0934 74.8786C32.3732 73.626 31.9961 72.2058 32 70.761C32.004 69.3162 32.3888 67.898 33.1158 66.6494L50.7867 36.3012C53.1422 32.2552 56.5178 28.8977 60.5767 26.5637C64.6355 24.2297 69.2355 23.001 73.9177 23H117.17"
          stroke={`${props.disabled ? "url(#paint8_linear_1395_28441)" : "url(#paint5_linear_1395_28441)"}`}
          stopwidth="1.786"
          stoplinecap="round"
          stoplinejoin="round"
        />
        <text
          fill={`${props.disabled ? "gray":"white" }`}
          style={{ whiteSpace: "pre"}}
          fontSize={props.fontSize}
          fontFamily="Montserrat"
          fontWeight={500}
          letterSpacing={"0em"}
        >
          <tspan x="75" y="59.104">
            {props.text}
          </tspan>
        </text>
      </g>
      <defs>
        <filter
          id="filter0_f_1395_28441"
          x="0.120361"
          y="0.5"
          width="346.68"
          height="103"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_1395_2844"
          />
        </filter>
        
        <linearGradient
          id="paint0_linear_1395_28441"
          x1="119.82"
          y1="16.908"
          x2="123.815"
          y2="77.436"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B83EDE" />
          <stop offset="1" stopColor="#651FFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1395_28441"
          x1="119.82"
          y1="16.908"
          x2="123.815"
          y2="77.436"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B83EDE" />
          <stop offset="1" stopColor="#651FFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1395_28441"
          x1="93.56"
          y1="19.304"
          x2="98.767"
          y2="73.7143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B83EDE" />
          <stop offset="1" stopColor="#651FFF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1395_28441"
          x1="200.108"
          y1="21.502"
          x2="205.407"
          y2="72.9231"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B83EDE" />
          <stop offset="1" stopColor="#651FFF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1395_28441"
          x1="233.704"
          y1="90.76"
          x2="232.743"
          y2="47.1705"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1395_28441"
          x1="93.56"
          y1="19.304"
          x2="98.767"
          y2="73.7143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        
        <linearGradient
          id="paint6_linear_1395_28441"
          x1="119.82"
          y1="16.908"
          x2="123.815"
          y2="77.436"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5A3A63" />
          <stop offset="1" stopColor="#144767" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1395_28441"
          x1="119.82"
          y1="16.908"
          x2="123.815"
          y2="77.436"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B83EDE" />
          <stop offset="1" stopColor="#651FFF" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_1395_28441"
          x1="233.704"
          y1="90.76"
          x2="232.743"
          y2="47.1705"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8F8F8F" />
          <stop offset="1" stopColor="#8F8F8F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GlowButton;
