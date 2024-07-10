import React from "react";
import ArrowButton from "../Buttons/ArrowButton";

export default function CategoryCard({ data }) {
  return (
    <div className="category-card" style={{ backgroundColor: data.bgColor }}>
      <div className="cat-text">
        <h1 className="">
          {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
        </h1>
        <p className="">{data?.description}</p>

        <ArrowButton btn_text={"See Now"}/>
      </div>
      <div className="cat-img">
        <img
          src={data?.catImg}
          alt="cat-icon"
          className=""
          loading="lazy"
        />
      </div>
    </div>
  );
}
