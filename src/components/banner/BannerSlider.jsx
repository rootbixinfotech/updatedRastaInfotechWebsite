import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {  Autoplay } from "swiper/modules";

import banner_1 from "../../assets/Homebanner_1.jpg";
import banner_2 from "../../assets/Homebanner_2.jpg";
import banner_3 from "../../assets/Homebanner_3.jpg";

const slides = [
  {
    id: 1,
    title: "Welcome to Rasta Infotech",
    description: "Unlock Online Success with our Customized It Services",
    image: banner_3,
  },
  {
    id: 2,
    title: "Reliable IT Services for Every Stage of Growth",
    description: "We provide creative and efficient solutions",
    image: banner_2,
  },
  {
    id: 3,
    title: "Seamless IT Services to Drive Your Business Forward",
    description: "From Infrastructure to Innovation – We’ve Got IT Covered",
    image: banner_1,
  },
];

const BannerSlider = () => {
  return (
    <div className="mt-0">
      <Swiper
        modules={[ Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="w-full h-[720px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className=" bg-opacity-50 p-10 rounded-lg text-center max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
 