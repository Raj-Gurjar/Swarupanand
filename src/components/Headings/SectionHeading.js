import React from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function SectionHeading({ sectionName, sectionBg }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" h-[300px] mb-[110px] flex justify-center align-middle text-center overflow-hidden bg-black">
        <div className="z-10 absolute mt-[115px]">
          <h1 className="section-title">{sectionName}</h1>
          <div className="text-[17px] text-white font-medium flex  gap-1 justify-center text-center align-middle">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>
            <span className="text-green-500 mt-[6px] font-extrabold text-[18px]">
              <MdKeyboardDoubleArrowRight />
            </span>
            <span className="capitalize">{sectionName}</span>
          </div>
        </div>
        <img
          src={sectionBg}
          alt={`${sectionName - "img"}`}
          className="z-1 object-fill h-[300px] w-full rounded-lg opacity-50"
        />
      </div>
    </div>
  );
}
