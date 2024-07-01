"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

function Banner() {
  return (
    <Swiper
      rewind={true}
      navigation={true}
      loop={true}
      autoplay={{ delay: 1500 }}
      modules={[Navigation, Autoplay]}
      className="mySwiper home-slider"
    >
      <SwiperSlide>
        {/* <img
          src="https://set-coffee.com/wp-content/uploads/2023/12/slide.jpg"
          alt="Slide"
        /> */}
        <Image
          src="/images/022.png"
          width={1920}
          height={520}
          alt="productBanner"
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* <img
          src="https://set-coffee.com/wp-content/uploads/2021/10/winter-slie.jpg"
          alt="Slide"
        /> */}
        <Image
          src="/images/022.jpg"
          width={1920}
          height={520}
          alt="productBanner"
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* <img
          src="https://set-coffee.com/wp-content/uploads/2022/06/fall.jpg"
          alt="Slide"
        /> */}
        <Image
          src="/images/033.jpeg"
          width={1920}
          height={520}
          alt="productBanner"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
