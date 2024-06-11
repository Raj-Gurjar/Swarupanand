import React, { useState } from "react";

export default function CategoryCard({ data }) {
  return (
    <div className="category-card" style={{ backgroundColor: data.bgColor }}>
      <div className="cat-text">
        <h1 className="">
          {data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
        </h1>
        <p className="">{data?.description}</p>
      </div>
      <div className="cat-img">
        <img
          src={data?.catImg}
          alt="cat-icon"
          className=""
        />
      </div>
    </div>
  );
}
