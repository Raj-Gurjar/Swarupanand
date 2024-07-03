import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";

import TestimonialsData from "../../data/testimonial.json";
import TestimonialCard from "../Cards/TestimonialCard";

import Slider from "react-slick";
import CurlyTitles from "../Headings/CurlyTitles";
import "../../pages/Home/Home.scss";

export default function Testimonials() {
  const allTestimonials = TestimonialsData?.testimonials;
  return (
    <div className="m-5">
      <CurlyTitles titleName={"Our Customers' Reviews"} />

      <Swiper
        style={{
          "--swiper-navigation-size": "20px",
          "--swiper-pagination-bullet-size": "6px",
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 9500,
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
            <div className="">
              <TestimonialCard data={testimonial} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
