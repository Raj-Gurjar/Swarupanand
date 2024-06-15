import React from "react";
import "./Buttons.scss";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ArrowButton({ btn_text }) {
  return (
    <div>
      <button className="arrow-button">
        {btn_text}
        <span>
          <IoIosArrowRoundForward />
        </span>
      </button>
    </div>
  );
}
