import React from "react";

const DashedLine = () => {
  return (
    <svg
      width="2"
      height="257"
      viewBox="0 0 2 257"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1"
        y1="1"
        x2="1.00001"
        y2="256"
        stroke="#999999"
        stroke-width="2"
        stroke-linecap="round"
        stroke-dasharray="15 15"
      />
    </svg>
  );
};

export default DashedLine;