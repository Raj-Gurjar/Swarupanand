import React from "react";
import CategorySlider from "../components/Sliders/CategorySlider";
import Features from "../components/Features";
import Testimonials from "../components/Sliders/Testimonials";

import TopBanner from "../components/Sliders/TopBanner";
import Footer from "../components/Footer";
import Blog from "../components/BlogComponent";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <CategorySlider />
      <Features />

      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}
