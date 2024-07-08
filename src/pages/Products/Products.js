import React, { useState, useEffect } from "react";
import productsData from "../../data/allProducts.json";
import ProductCard from "../../components/Cards/ProductCard";
import { useLocation } from "react-router-dom";
import "./product.scss";
import AboutBg from "../../data/assets/background/contact-bg.jpg";
import Footer from "../../components/Footer/Footer";
import SectionHeading from "../../components/Headings/SectionHeading";
import CurlyTitles from "../../components/Headings/CurlyTitles";

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("top Products");
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
      <SectionHeading sectionName={"Products"} sectionBg={AboutBg} />

      <div className="products">
        <CurlyTitles titleName={" Choose a Category"} />

        <img src={allProducts?.categories?.product?.image} alt="" />

        <div
          className="flex flex-wrap mt-8 mb-10 gap-[10px] justify-between"
          data-aos="zoom-in-down"
          data-aos-offset="100"
        >
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
          <div
            className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 relative"
            data-aos="zoom-in-right"
          >
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
