import React from "react";
import CategorySlider from "../components/CategorySlider";
import Features from "../components/Features";

export default function Home() {
  // Use productsData directly

  return (
    <div>
      <h1>Home</h1>
      {/* Render your products here */}
      <CategorySlider />
      <Features />
    </div>
  );
}
