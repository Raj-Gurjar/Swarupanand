import React, { useState } from "react";

export default function CategoryCard({ data }) {
  return (
    <div
      style={{ backgroundColor: data.bgColor }}
      className="item-content relative md:rounded-[500px] rounded-[20px] mx-[15px] p-10"
    >
      <div className={`h-[100px]`}>
        <p>{data?.name}</p>
        <p>{data?.description}</p>
      </div>
    </div>
  );
}
