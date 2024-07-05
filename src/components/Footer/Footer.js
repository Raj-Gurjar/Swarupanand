import React from "react";
import bgFooterTop from "../../data/assets/background/footer-top.png";
import { Link, NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
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
                <span className="footer-underline"></span>
              </div>

              <div className="flex flex-wrap mb-2">
                <span1>
                  <FaLocationDot />
                </span1>
                <h2 className="">
                  Ward no.03 Dharamkundi,
                  <h1>district-Narmadapurm,MP,461221</h1>
                </h2>
              </div>

              <div className="flex flex-wrap mb-2">
                <span1>
                  <FaPhone />
                </span1>
                <h2>+91 7987049181, +91 8889507870</h2>
              </div>

              <div className="flex flex-wrap ">
                <span1>
                  <IoMdMail />
                </span1>
                <h2>
                  <a href="mailto:rajchhalotre15@gmail.com">
                    arpangour80@gmail.com
                  </a>
                </h2>
              </div>
            </div>
          </div>

          <div className="footer-social-info">
            <h1 className="footer-head-1 ">Social Media</h1>
            <span className="footer-underline"></span>
            <div className="flex gap-8 text-[25px]">
              <div className="">
                <a href="www.google.com">
                  <p className="contact-icon  text-white hover:text-[#f46f30]">
                    <FaInstagram />
                  </p>
                </a>
              </div>
              <div className="">
                <a href="www.google.com">
                  <p className="contact-icon  text-white  hover:text-[#1877f2]">
                    <FaFacebook />
                  </p>
                </a>
              </div>
              <div className="">
                <a href="www.google.com">
                  <p className="contact-icon  text-white hover:text-[#25d366]">
                    <RiWhatsappFill />
                  </p>
                </a>
              </div>
              <div className="">
                <a href="www.google.com">
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
        <div className="m-auto text-center p-5">
          <p className=" mt-[-40px] text-[19px] font-bold">
            Made By Raj Chhalotre
          </p>
          <p>
            Mail at :{" "}
            <a
              href="mailto:rajchhalotre15@gmail.com"
              className="text-orange-300"
            >
              rajchhalotre15@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
