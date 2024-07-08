import React from "react";
import home_img_1 from "../../data/assets/Home-Banners/veg-basket.png";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";

export default function TopBanner() {
  return (
    <div className="TopBanner-comp">
      <div className="home-container">
        <div className="home-text">
          <h1 className="topBanner-head-1" data-aos="fade-right">
            We are <span>Swarupanand</span>
          </h1>
          <h2 className="topBanner-head-2" data-aos="fade-right" data-aos-duration="500">
            We will serve you the Best <span>Organic</span> Food Everyday
          </h2>

          <btn className="flex">
            <div className="btn-11">
              <Link to="/view-products"> View Products</Link>
            </div>
            <div className="btn-22">
              <Link to="/about"> About Us</Link>
            </div>
          </btn>
        </div>

        <div className="home-img"  data-aos="fade-left" data-aos-duration="500">
          <img src={home_img_1} alt="home-img" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
