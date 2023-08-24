import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className={`${styles.heroSection}`}>
      <div className="flex flex-col md:flex-row items-center mx-[150px]">
        <div className="flex items-center justify-center m-auto w-[60%]">
          <div className="flex flex-col gap-[30px] flex-wrap m-auto">
            <h1 className="text-[64px] font-bold leading-[normal] not-italic">
              Get an Instant offer and sell your home
            </h1>
            <form className="w-full h-24 p-[8px] rounded-[20px] bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-between">
              <LazyLoadImage
                src={"location-on-rounded.png"}
                alt={"Location Icon"}
                width={44}
                height={44}
                className="mx-[30px]"
              />
              <input
                className="w-full outline-none text-[#999] text-lg font-medium -tracking-[0.36px]"
                placeholder="where's your house?"
              />
              <button className="min-w-fit h-full px-[30px] flex items-center justify-center gap-[20px] rounded-[15px] bg-dark-blue shadow-[1px_1px_4px_0px_rgba(0,97,223,0.30)] text-white text-[18px] font-semibold">
                Get my free offer
              </button>
            </form>
            <p className="text-2xl font-normal leading-[normal] not-italic">
              Receive an offer within 24 hours, it’s that simple!
            </p>
          </div>
        </div>
        <div className="flex w-[40%] ">
          <LazyLoadImage src={"Hero.png"} alt={"Hero Image"} />
        </div>
      </div>
      {/* <img src={"layered-waves-haikei 1.svg"} alt="Hero background pattern" /> */}
    </section>
  );
};

export default HeroSection;
