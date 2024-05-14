import React, { useState } from "react";
import productsData from "../data/allProducts.json";
import ProductCard from "../components/Cards.js/ProductCard";
import { NavLink } from "react-router-dom";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("topProducts");
  const allProducts = productsData;

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <div className="bg-blue-500 h-[300px]">Top Heading/ design</div>

      <div>
        <h1> Products' Category </h1>

        <div className="flex gap-5">
          {allProducts.categories.map((category, index) => (
            <div key={index} className="flex gap-5 bg-red-400">
              <button onClick={() => handleCategoryClick(category.name)}>
                <p className="flex gap-5 bg-green-400">{category.name}</p>
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2>Selected Category: {selectedCategory}</h2>
          <div className="grid grid-cols-4 gap-4">
            {allProducts.categories
              .find((cat) => cat.name === selectedCategory)
              ?.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
