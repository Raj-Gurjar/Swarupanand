import React from "react";
import CategorySlider from "../components/Sliders/CategorySlider";
import Features from "../components/Features";
import Testimonials from "../components/Sliders/Testimonials";
import BestSellers from "../components/BestSellers";
import TopBanner from "../components/Sliders/TopBanner";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <CategorySlider />
      <Features />
      {/* <BestSellers /> */}
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}
