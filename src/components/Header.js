import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

import omeleteImage from "../assets/images/image-omelette.jpeg";
import omeleteImage2 from "../assets/images/image-omelette-2.jpg";
import omeleteImage3 from "../assets/images/image-omelette-3.jpg";
import omeleteImage4 from "../assets/images/image-omelette-4.jpg";

export default function Header() {
  return (
    <header className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            src={omeleteImage}
            className="rounded-2xl h-[300px] w-fu object-cover"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={omeleteImage2}
            className="rounded-2xl h-[300px] w-full object-cover"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={omeleteImage3}
            className="rounded-2xl h-[300px] w-full object-cover"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={omeleteImage4}
            className="rounded-2xl h-[300px] w-full object-cover"
            alt="logo"
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
}
