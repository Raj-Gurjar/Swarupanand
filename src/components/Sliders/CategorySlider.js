import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import productsData from "../../data/allProducts.json";
import CategoryCard from "../Cards/CategoryCard";
import { useNavigate } from "react-router-dom";

export default function CategorySlider() {
  const allProducts = productsData;
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate("/view-products", { state: { chooseCategory: categoryName } });
  };

  return (
    <div className="m-5">
      {/* <h1 className="title">Explore our all Categories</h1> */}
      <div className="head-2 flex justify-center text-center m-5">
        <span1>
          <span>~</span>
          Explore Our Categories
          <span>~</span>
        </span1>
      </div>
      {/* <p className="wave"></p> */}
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
        {allProducts?.categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleCategoryClick(category.name)}
              className="cursor-pointer"
            >
              <CategoryCard data={category} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
