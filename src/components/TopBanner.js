import React from "react";
import Slider from "react-slick";
import banner1 from "../../src/Home-Banners/slider-1.png";
import banner2 from "../../src/Home-Banners/slider-2.png";

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  return (
    <div className="bg-green-100 min-h-screen p-5 overflow-x-hidden">

      <div className="absolute z-10">
        <h1 className="text-2xl m-5">Name</h1>
      </div>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="border-none overflow-hidden">
            <img
              src={banner.src}
              alt={banner.alt}
              className="rounded-lg object-cover min-h-[74vh] w-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
