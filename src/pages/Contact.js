import React from "react";
import contactBg from "../data/assets/background/contact-bg.jpg";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/ContactCard";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { IoIosMail } from "react-icons/io";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="pb-10">
      <div className=" h-[300px] mb-[110px] flex justify-center align-middle text-center overflow-hidden bg-black">
        <div className="z-10 absolute bg-red-300 mt-[140px]">
          <h1 className="title-2">Contact Us</h1>
          <div className="text-[16px] text-white">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              {" "}
              Home
            </span>{" "}
            <span>- </span>
            <span className="capitalize">Contact Us</span>
          </div>
        </div>
        <img
          src={contactBg}
          alt="categoryBg"
          className="z-1 object-fill h-[300px] w-full rounded-lg opacity-50"
        />
      </div>

      <div>
        <div className="flex gap-5 justify-around px-5">
          <ContactCard icon={"i"} head="Address" data="lorem5fsdfsdf sdfsdf" />
          <ContactCard
            icon={"i"}
            head="Phone No."
            data="lorem5fsdfsdf sdfsdf"
          />
          <ContactCard icon={"i"} head="Email" data="lorem5fsdfsdf sdfsdf" />
        </div>
      </div>
    </div>
  );
}
