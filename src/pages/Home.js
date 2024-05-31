import React from "react";
import CategorySlider from "../components/CategorySlider";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import BestSellers from "../components/BestSellers";
import TopBanner from "../components/TopBanner";
import Footer from "../components/Footer";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <CategorySlider />
      <Features />
      <BestSellers />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}
