import React, { useState, useEffect } from "react";
import productsData from "../data/allProducts.json";
import ProductCard from "../components/Cards/ProductCard";
import { useLocation, useNavigate } from "react-router-dom";
import "./product.scss";
import categoryBg from "../data/assets/background/category-bg.jpeg";
import Footer from "../components/Footer";

export default function Products() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("top Products");
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.chooseCategory) {
      setSelectedCategory(location.state.chooseCategory);
    }
  }, [location.state?.chooseCategory]);

  const allProducts = productsData;
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  console.log("selected cat", selectedCategory);
  console.log("cat name", allProducts.categories.name);
  return (
    <div>
      <div className=" h-[300px]  flex justify-center align-middle text-center overflow-hidden bg-black">
        <div className="z-10 absolute mt-[140px]">
          <h1 className="title-2">Product Category</h1>
          <div className="text-[16px] text-white">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>
            <span> - </span>
            <span className="capitalize">{selectedCategory}</span>
          </div>
        </div>
        <img
          src={categoryBg}
          alt="categoryBg"
          className="z-1 object-fill h-[300px] w-full rounded-lg opacity-60"
        />
      </div>

      <div className="products">
        <div className="head-2">
          <span1>
            <span>~</span>
            Choose a Category
            <span>~</span>
          </span1>
        </div>

        <img src={allProducts?.categories?.product?.image} alt="" />

        <div className="flex flex-wrap mt-8 mb-10 justify-between ">
          {allProducts.categories.map((category, index) => (
            <div
              onClick={() => handleCategoryClick(category.name)}
              key={index}
              className={` product-category-buttons ${
                category.name === selectedCategory ? "selected-category" : ""
              }`}
            >
              <div className="flex justify-center">
                <img
                  src={category?.icon}
                  alt={category.name + "-img"}
                  className={` h-[35px] w-[35px]`}
                />
              </div>

              <p className="text-[12px]">{category.name}</p>
            </div>
          ))}
        </div>

        <div>
          <div className="grid grid-cols-4 gap-8 relative">
            {allProducts.categories
              .find((cat) => cat.name === selectedCategory)
              ?.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        </div>
      </div>

      <div className="bg-[#E1F3F2] mt-[-40px] pt-[100px]">
        <Footer />
      </div>
    </div>
  );
}
