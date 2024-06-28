"use client";
import Product from "@/components/modules/product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const MoreProducts = ({ relatedProducts }) => {
  return (
    <div data-aos="fade-right">
      <section style={{display:"flex", flexDirection:"column",  alignItems:"end"}}>
        <h2> Related Products</h2>
        <div
          style={{
            height: "2px",
            width: "200px",
            background: "black",
            marginTop: "10px",
            
          }}
        ></div>
      </section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        dir="ltr"
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper "
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <Product {...product}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoreProducts;
