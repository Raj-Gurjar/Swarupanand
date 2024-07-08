
import React from "react";

import { Swiper} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import {  Pagination, Autoplay, Navigation } from "swiper/modules";


export default function HomeSlider() {
  return (
    <div>
      <h1>Home Slider</h1>

      <div className="m-5">
        <h1 className="title">Explore our all Categories</h1>
        <p className="wave"></p>
        <Swiper
          style={{
            "--swiper-navigation-size": "20px",
            "--swiper-pagination-bullet-size": "6px",
          }}
          loop={true}
          slidesPerView={2}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          breakpoints={{
            1000: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
          }}
          className="mySwiper"
        >
          {/* {allProducts?.categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard data={category} />
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
    </div>
  );
}
