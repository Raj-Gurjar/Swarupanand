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

export default function Testimonials() {
  const allTestimonials = TestimonialsData?.testimonials;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
  };
  return (
    <div>
      {/* <h1>Home Slider</h1> */}

      <div className="m-5 my-[90px]">
        <CurlyTitles titleName={"Our Customers' Reviews"} />

        <div className="slider-container overflow-x-hidden">
          <Slider {...settings}>
            {/* {allTestimonials?.map((testimonial, index) => (
              <div key={index}>
                <TestimonialCard data={testimonial} />
              </div>
            ))} */}
            <div className="bg-red-400 h-[300px]">
              <p>1</p>
            </div>
            <div className="bg-blue-400 h-[300px]">
              <p>2</p>
            </div>
            <div className="bg-green-400 h-[300px]">
              <p>3</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
