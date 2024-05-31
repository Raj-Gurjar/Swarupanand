import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

import TestimonialsData from "../data/testimonial.json";
import TestimonialCard from "./Cards.js/TestimonialCard";

export default function Testimonials() {
  const allTestimonials = TestimonialsData?.testimonials;
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
          {allTestimonials?.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard data={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
