import React from "react";
import bgFooterTop from "../data/assets/background/footer-top.png";
import { Link, NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className=" min-h-[70vh] footer mt-5 text-white">
        <div className="flex justify-between px-[40px] p-5 pt-20">
          <div>
            <p>Logo</p>
            <p>Tagline</p>
          </div>

          <div className="footer-links-container">
            <h1 className="footer-head-1 ">Links</h1>
            <span className="underline"></span>
            <ul>
              <li>
                <NavLink to="/home">
                  <div className="footer-link">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <h3>Home</h3>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <div className="footer-link">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <h3>About Us</h3>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/view-products">
                  <div className="footer-link">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <h3>All Products</h3>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery">
                  <div className="footer-link">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <h3>Gallery</h3>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <div className="footer-link">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <h3>Write us</h3>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-official-info">
            <div>
              <div>
                <h1 className="footer-head-1">Official Info</h1>
                <span className="underline"></span>
              </div>

              <div className="flex flex-wrap mb-2">
                <span1 className="">
                  <FaLocationDot />
                </span1>
                <h2>Addresssss Lorem ipsum dolor sit amet.</h2>
              </div>

              <div className="flex flex-wrap mb-2">
                <span1>
                  <FaPhone />
                </span1>
                <h2>+91 030230233</h2>
              </div>

              <div className="flex flex-wrap ">
                <span1>
                  <IoMdMail />
                </span1>
                <h2>email@fsfsf</h2>
              </div>
            </div>

            <div className="mt-5">
              <h1 className="text-[#FF7800] font-bold text-[15px] ">
                Open Hours
              </h1>
              <p>Mon-Sat : 8am - 5pm</p>
              <p>Sun : CLOSED</p>
            </div>
          </div>

          <div>
            <h1 className="footer-head-1">Social Media</h1>
            <span className="underline"></span>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="footer2 z-20 h-[20px] ">
        {/* <p className="m-auto text-center mt-[-40px]">Made By Raj Chhalotre</p> */}
      </div>
    </div>
  );
}
