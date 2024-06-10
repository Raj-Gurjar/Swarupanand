import React from "react";
import Slider from "react-slick";
import banner1 from "../../data/assets/Home-Banners/slider-1.png";
import banner2 from "../../data/assets/Home-Banners/slider-2.png";
import { Link } from "react-router-dom";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", margin: 0 }}
      onClick={onClick}
    />
  );
}

const banners = [
  { src: banner1, alt: "banner-1" },
  { src: banner2, alt: "banner-2" },
];

export default function TopBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  return (
    <div className="homeBanner">
      <Slider {...settings}>
        <div>
          <div className="absolute z-10 my-[70px] mx-[30px]">
            <h1 className="topBanner-head-1">
              <span>Swarupanand's</span> 100% Genuine Product Served
            </h1>
            <h2 className="topBanner-head-2">
              Organic & <span>Healthy</span> Food Everyday
            </h2>

            <btn>
              <Link to="/view-products"> Shop Now</Link>
            </btn>
          </div>

          <div className="border-none overflow-hidden">
            <img
              src={banner1}
              alt={banner1}
              className="object-cover min-h-[74vh] w-full"
            />
          </div>
        </div>

        <div>
          <div className="absolute z-10 my-[70px] mx-[30px]">
            <h1 className="topBanner-head-1">
              We are <span>Swarupanand's</span>
            </h1>
            <h2 className="topBanner-head-2">
              We will serve you the Best <span>Organic</span> Food Everyday
            </h2>

            <btn>
              <Link to="/view-products"> Shop Now</Link>
            </btn>
          </div>

          <div className="border-none overflow-hidden">
            <img
              src={banner2}
              alt={banner2}
              className="object-cover min-h-[74vh] w-full"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
