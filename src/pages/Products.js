import React, { useState } from "react";
import productsData from "../data/allProducts.json";
import ProductCard from "../components/Cards.js/ProductCard";
import { NavLink } from "react-router-dom";
import "./product.scss";
import categoryBg from "../data/assets/background/category-bg.jpeg";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("top Products");
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

        <div className="flex gap-5 flex-wrap m-1 bg-red-400 justify-evenly">
          {allProducts.categories.map((category, index) => (
            <div
              onClick={() => handleCategoryClick(category.name)}
              key={index}
              className="cat-container flex flex-col gap-1 bg-gray-400 justify-center"
            >
              <div className="flex justify-center">
                <img
                  src={category?.icon}
                  alt={category.name + "-img"}
                  className={`bg-blue-400 h-[70px] w-[70px]`}
                />
              </div>

              <p
                className={` flex justify-center capitalize ${
                  category.name === selectedCategory ? "active-cat-text" : ""
                }`}
              >
                {category.name}
              </p>
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
