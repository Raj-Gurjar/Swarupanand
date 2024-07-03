import React from "react";
import CategorySlider from "../../components/Sliders/CategorySlider";
import Features from "./Features";
import Testimonials from "../../components/Sliders/Testimonials";

import TopBanner from "../../components/Sliders/TopBanner";
import Footer from "../../components/Footer/Footer";
import Blog from "./BlogComponent";


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
