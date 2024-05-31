import React, { useState } from "react";
import productsData from "../data/allProducts.json";
import ProductCard from "../components/Cards.js/ProductCard";
import { NavLink } from "react-router-dom";
import "./product.scss";
import categoryBg from "../data/assets/background/category-bg.jpeg";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("topProducts");
  const allProducts = productsData;

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <div className=" h-[300px] m-5 flex justify-center align-middle text-center rounded-lg overflow-hidden bg-black">
        <div className="z-10 absolute bg-red-300 mt-[140px]">
          <h1 className="text-2xl">Product Category</h1>
          <div>
            Home - <span>{selectedCategory}</span>
          </div>
        </div>
        <img
          src={categoryBg}
          alt="categoryBg"
          className="z-1 object-fill h-[300px] w-full rounded-lg opacity-70"
        />
      </div>

      <div className="products">
        <h1> Products' Category </h1>

        <img src={allProducts?.categories?.product?.image} alt="" />

        <div className="flex gap-5 flex-wrap">
          {allProducts.categories.map((category, index) => (
            <div key={index} className="flex gap-5 bg-red-400">
              <button onClick={() => handleCategoryClick(category.name)}>
                <img
                  src={category?.icon}
                  alt={category.name + "-img"}
                  className="h-[100px] w-[100px]"
                />
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
