import React, { useState } from "react";


export default function CategoryCard({ data }) {
  return (
    <div
      style={{ backgroundColor: data.bgColor }}
      className="item-content relative md:rounded-[500px] rounded-[20px] mx-[15px] p-10 pointer"
    >
      <div className={`h-[100px] flex` }>
        <div className="flex flex-col">
         
          <p className="text-2xl mb-4">{ data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}</p>
          <p className="text-[10px]">{data?.description}</p>
        </div>
        <div className="bg-red-400 w-[60%] h-[100px]">
          <img src={data?.icon} alt="cat-icon" className="object-cover"/>
        </div>
      </div>
    </div>
  );
}
