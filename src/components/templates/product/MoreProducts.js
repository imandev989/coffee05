"use client";
import Product from "@/components/modules/product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MoreProducts = () => {
  return (
    <div data-aos="fade-right">
      <section>
        <h2> Related Products</h2>
        <div
          style={{
            height: "2px",
            width: "70px",
            background: "black",
            marginTop: "10px",
          }}
        ></div>
      </section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        dir="rtl"
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MoreProducts;
