import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import StepsCheck from "../../icons/StepsCheck";
import DashedLine from "../../icons/DashedLine";

const howItWorksSteps = [
  {
    step: "Step 1",
    title: "Request for an offer",
    description:
      "Fill in your property details and get an instant preliminary home value.",
  },
  {
    step: "Step 2",
    title: "Schedule an appointment",
    description:
      "Show us your home in-person or virtually and get our offer within 24 hours of the appointment.",
  },
  {
    step: "Step 3",
    title: "Sell your house",
    description:
      "Have complete control over your decision. Either accept our offer or list with us. ",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl  m-auto">
      <div className="flex flex-col gap-[15px] text-center mb-[90px] mt-[100px]">
        <h2 className="text-center text-[24px] md:text-[48px] font-bold leading-[normal] not-italic">
          Let’s See How it Works
        </h2>
        <p className="text-center text-[16px] md:text-[24px] w-[260px] md:w-full m-auto font-normal leading-[normal] not-italic">
          Here’s how we make it easier to sell your home
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full h-full">
          <LazyLoadImage src={"HowItWorks/HowItWorksImage.png"} />
        </div>
        <div className="w-full h-full">
          <ul className="flex flex-col px-[20px]">
            {howItWorksSteps.map((stepItem, index) => {
              const isLastStep = howItWorksSteps.length === index + 1;
              return (
                <li
                  key={stepItem.step}
                  className="flex flex-row gap-[30px] relative"
                >
                  <div className="h-full">
                    <StepsCheck />
                    {!isLastStep && (
                      <div className="absolute top-4 md:top-12 bottom-0 left-[15px] overflow-hidden -z-[1]">
                        <DashedLine />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-[#999] text-[14px] md:text-[18px] not-italic font-medium leading-[normal] uppercase">
                      {stepItem.step}
                    </p>
                    <h3 className="text-[16px] md:text-[28px] not-italic font-semibold leading-[normal] uppercase mt-[5px] md:mt-[20px] mb-[10px] md:mb-[15px]">
                      {stepItem.title}
                    </h3>
                    <p className="w-full md:w-[376px] text-[16px] md:text-[18px] text-[#999] not-italic font-normal leading-[normal] mb-[30px]">
                      {stepItem.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
