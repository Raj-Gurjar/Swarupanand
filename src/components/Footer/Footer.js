import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import logo from "../../data/assets/logos/logo1.jpg";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-1 ">
        <div className="footer-1-container">
          <div className="footer-logo-container">
            <div>
              <img src={logo} alt="" className="w-[300px] h-[200px]" />
            </div>
            <p>Tagline</p>
          </div>

          <div className="footer-links-container">
            <h1 className="footer-head-1 ">Links</h1>
            <span className="footer-underline"></span>
            <ul>
              <li>
                <NavLink to="/">
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
                <Link to="/view-products">
                  <div className="footer-link">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <h3>All Products</h3>
                  </div>
                </Link>
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
                <NavLink to="/blogs">
                  <div className="footer-link">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <h3>Read Blogs</h3>
                  </div>
                </NavLink>
                <NavLink to="/contact">
                  <div className="footer-link">
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <h3>Contact us</h3>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-official-info">
            <div>
              <div>
                <h1 className="footer-head-1">Official Info</h1>
                <span className="footer-underline"></span>
              </div>
              <div className="flex justify-left flex-wrap">
                <div className="flex flex-wrap mb-2">
                  <span1>
                    <FaLocationDot />
                  </span1>
                  <h2 className="">
                    1234 Oakwoodd Lane, Springsfield, 62704, USA
                  </h2>
                </div>

                <div className="flex flex-wrap mb-2">
                  <span1>
                    <FaPhone />
                  </span1>
                  <h2>+1 312-555-6789, +1 312-555-9876 </h2>
                </div>

                <div className="flex flex-wrap ">
                  <span1>
                    <IoMdMail />
                  </span1>
                  <h2>
                    <a href="mailto:rajchhalotre15@gmail.com">
                      abcdefg80@gmail.com
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-social-info">
            <h1 className="footer-head-1 ">Social Media</h1>
            <span className="footer-underline"></span>
            <div className="flex justify-left flex-wrap gap-7 text-[28px]">
              <div className="">
                <a href="social-media-links" target="_blank" rel="external">
                  <p className="contact-icon  text-white hover:text-[#f46f30]">
                    <FaInstagram />
                  </p>
                </a>
              </div>
              <div className="">
                <a href="social-media-links" target="_blank" rel="external">
                  <p className="contact-icon  text-white  hover:text-[#1877f2]">
                    <FaFacebook />
                  </p>
                </a>
              </div>
              <div className="">
                <a href="social-media-links" target="_blank" rel="external">
                  <p className="contact-icon  text-white hover:text-[#25d366]">
                    <RiWhatsappFill />
                  </p>
                </a>
              </div>
              <div className="">
                <a href="social-media-links" target="_blank" rel="external">
                  <p className="contact-icon  text-white hover:text-[#ff0000]">
                    <FaYoutube />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2 z-20 h-[40px] ">
        <div className="m-auto text-center p-2">
          <p className=" mt-[-40px] text-[19px] font-bold">
            Made By Raj Chhalotre
          </p>
          <p>
            Visit My Portfolio :{" "}
            <a
              href="https://raj-portfolio101.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-orange-300 hover:text-orange-500">
                {" "}
                Click Here
              </span>
            </a>
          </p>

          <p> <span className="text-red-600 text-xl">*</span> This is a demo website. So, the details and people are not real.</p>
        </div>
      </div>
    </div>
  );
}
