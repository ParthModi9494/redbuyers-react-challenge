import React, { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setisMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { isMobile };
};

export default useMobile;
