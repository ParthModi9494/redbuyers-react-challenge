import React from "react";

const StepsCheck = () => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="white" />
      <g filter="url(#filter0_d_3_3083)">
        <rect
          x="5.01941"
          y="5.01953"
          width="21.9608"
          height="21.9608"
          rx="10.9804"
          fill="#0061DF"
        />
      </g>
      <path
        d="M11.2942 16.3138L14.5883 19.6079L21.1765 12.5491"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_3_3083"
          x="3.01941"
          y="3.01953"
          width="29.9608"
          height="29.9608"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.380392 0 0 0 0 0.87451 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3_3083"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3_3083"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StepsCheck;
