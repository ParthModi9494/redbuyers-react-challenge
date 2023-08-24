// React Slick carousel
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import useMobile from "../../hooks/useMobile";
import { Pagination, Scrollbar } from "swiper";

const testimonials = [
  {
    id: 1,
    rating: 4.5,
    feedbackText: `Aenean blandit, ligula eu volutpat pulvinar, elit purus iaculis magna, sed mattis orci enim in enim. Aliquam quis ligula commodo, consectetur turpis tempus, dictum mauris. Nullam viverra lobortis lectus. In viverra enim id lacus auctor, vel posuere ligula ornare. Cras rhoncus eleifend imperdiet. Aliquam ultrices nec lorem nec imperdiet. Vestibulum.`,
    image: "Testimonials/female-1.png",
    name: "Meredith Taylor",
    location: "Toronto",
  },
  {
    id: 2,
    rating: 4.5,
    feedbackText: `Fusce eget tempus arcu. Maecenas ac tristique purus, at pharetra ex. Curabitur consectetur nibh vel facilisis rhoncus. Nulla viverra nulla et lorem feugiat mattis. Etiam eleifend sem augue, nec elementum risus aliquam non. Nam placerat volutpat risus. Phasellus luctus orci mi, convallis mattis dui efficitur id. Maecenas dictum, diam vitae.`,
    image: "Testimonials/male-1.png",
    name: "Cohen Morin",
    location: "Ottawa",
  },
  {
    id: 3,
    rating: 4.5,
    feedbackText: `Sed ultricies metus a luctus volutpat. Vivamus varius mattis porttitor. Ut ornare leo tempor, lacinia augue et, ultricies dui. Donec id venenatis est, semper pulvinar risus. Duis pretium urna id ultrices condimentum. Maecenas vitae eleifend leo. Etiam vitae ultricies arcu. Aenean et massa odio. Donec sit amet elit at orci.`,
    image: "Testimonials/female-2.png",
    name: "Kayla Brown",
    location: "Montreal",
  },
  {
    id: 4,
    rating: 4.5,
    feedbackText: `In non ligula vitae orci malesuada faucibus. Quisque dictum nec mauris id maximus. Proin lacinia egestas laoreet. Vestibulum dapibus tempus elit sit amet vehicula. Nunc vel ligula nunc. Pellentesque sed semper ipsum, sed maximus enim. Cras et auctor arcu. Donec aliquam posuere maximus. Phasellus elementum at augue id imperdiet. Mauris.`,
    image: "Testimonials/male-2.png",
    name: "Chase Campbell",
    location: "Calgary",
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const { isMobile } = useMobile();

  return (
    <section>
      <div className="text-center flex flex-col gap-[10px] mt-[100px]">
        <h3 className="text-[24px] md:text-[48px] not-italic font-bold leading-[normal]">
          Don’t take our word for it. <br /> Take theirs...
        </h3>
        <p className="text-[16px] md:text-[24px] not-italic font-normal leading-[normal]">
          Listen to what our customers have to say.
        </p>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Scrollbar]}
        spaceBetween={10}
        slidesPerView={isMobile ? 1 : 2}
        centeredSlides
        loop
        initialSlide={0}
        onSlideChange={(e) => {
          setActiveSlide(e.realIndex);
        }}
      >
        {testimonials.map((testimonial, index) => {
          return (
            <SwiperSlide key={testimonial.id}>
              <div
                className={`py-20 shadow-[0px_10px_80px_-40px_rgba(0,0,0,0.25)] rounded-[25px] mx-[15px] md:rounded-[50px] bg-white p-[20px] md:p-[75px] flex flex-col gap-[15px] md:gap-[30px] w-full md:w-[860px] duration-150 ${
                  activeSlide === index ? "blur-0" : "blur-md"
                }`}
              >
                <div>{testimonial.rating}</div>
                <blockquote>
                  <p className="text-[14px] md:text-[24px] not-italic font-normal leading-[normal] md:leading-[32px] stacked-fractions">
                    {testimonial.feedbackText}
                  </p>
                </blockquote>
                <div className="flex flex-row gap-[50px]">
                  <LazyLoadImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={isMobile ? 40 : 90}
                    height={isMobile ? 40 : 90}
                    className="md:rounded-[50px] md:bg-gray-300"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-dark-blue text-[18px] md:text-[28px] not-italic font-medium leading-[normal] md:leading-[32px] -tracking-[0.54px] md:-tracking-[0.84px]">
                      {testimonial.name}
                    </span>
                    <span className="text-[#999] text-[14px] md:text-[24px] not-italic font-normal leading-[noraml] md:leading-[32px] -tracking-[0.14px] md:-tracking-[0.24px]">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
