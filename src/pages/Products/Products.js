import React, { useState, useEffect } from "react";
import productsData from "../../data/allProducts.json";
import ProductCard from "../../components/Cards/ProductCard";
import { useLocation } from "react-router-dom";
import "./product.scss";
import AboutBg from "../../data/assets/background/contact-bg.webp";
import Footer from "../../components/Footer/Footer";
import SectionHeading from "../../components/Headings/SectionHeading";
import CurlyTitles from "../../components/Headings/CurlyTitles";
import Loader from "../../components/Loader/Loader";

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("top Products");
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    if (location.state?.chooseCategory) {
      setSelectedCategory(location.state.chooseCategory);
    }
  }, [location.state?.chooseCategory]);

  const allProducts = productsData;

  const handleCategoryClick = (categoryName) => {
    setLoading(true); // Set loading to true when a new category is selected
    setSelectedCategory(categoryName);
  };

  useEffect(() => {
    if (selectedCategory) {
      const category = allProducts.categories.find(
        (cat) => cat.name === selectedCategory
      );

      if (category) {
        const imagePromises = category.products.map(
          (product) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = product.image;
              img.onload = resolve;
            })
        );

        Promise.all(imagePromises).then(() => {
          setLoading(false); // Set loading to false when all images are loaded
        });
      }
    }
  }, [selectedCategory, allProducts.categories]);

  return (
    <div>
      <SectionHeading sectionName={"Products"} sectionBg={AboutBg} />

      <div className="products">
        <CurlyTitles titleName={" Choose a Category"} />

        <div
          className="flex flex-wrap mt-8 mb-10 gap-[10px] justify-between"
          data-aos="zoom-in-down"
          data-aos-offset="10"
        >
          {allProducts.categories.map((category, index) => (
            <div
              onClick={() => handleCategoryClick(category.name)}
              key={index}
              className={`product-category-buttons ${
                category.name === selectedCategory ? "selected-category" : ""
              }`}
            >
              <div className="flex justify-center">
                <img
                  src={category?.icon}
                  alt={category.name + "-img"}
                  className={`h-[35px] w-[35px]`}
                />
              </div>

              <p className="text-[12px]">{category.name}</p>
            </div>
          ))}
        </div>

        {loading ? (
          <Loader />
        ) : (
          <div>
            <div
              className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-8 relative"
              data-aos="zoom-in"
            >
              {allProducts.categories
                .find((cat) => cat.name === selectedCategory)
                ?.products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#E1F3F2] mt-[-40px] pt-[100px]">
        <Footer />
      </div>
    </div>
  );
}
