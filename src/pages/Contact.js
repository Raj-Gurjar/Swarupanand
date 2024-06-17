/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import contactBg from "../data/assets/background/contact-bg.jpg";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/Cards/ContactCard";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import SectionHeading from "../components/Headings/SectionHeading";
import CurlyTitles from "../components/Headings/CurlyTitles";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="pb-10">
      <SectionHeading sectionName={"Contact"} sectionBg={contactBg} />

      <div>
        <div className="px-[80px] flex gap-10 justify-around">
          <ContactCard
            icon={<FaLocationDot />}
            head="Address"
            data="lorem5fsdfsdf sdfsdf"
          />
          <ContactCard
            icon={<FaPhoneVolume />}
            head="Phone No."
            data="lorem5fsdfsdf sdfsdf"
          />
          <ContactCard
            icon={<IoIosMail />}
            head="Email"
            data="lorem5fsdfsdf sdfsdf"
          />
        </div>

        <div className="">
          <CurlyTitles titleName={"follow us on"} />

          <div className="flex bg-[#76a713] p-5 my-5 mb-[100px] mx-[80px] rounded justify-evenly gap-5 text-center align-middle">
            <div className="contact-social">
              <p className="contact-icon">
                <FaInstagram />
              </p>
              <a href="www.google.com">Instagram</a>
            </div>
            <div className="contact-social">
              <p className="contact-icon">
                <FaFacebook />
              </p>
              <a href="www.google.com">Facebook</a>
            </div>
            <div className="contact-social">
              <p className="contact-icon">
                <RiWhatsappFill />
              </p>
              <a href="www.google.com">Whatsapp</a>
            </div>
          </div>
        </div>

        <div className="g-map-container">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=gupta%20ground,narmadapuram+(Home)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>

        <div className="flex flex-col justify-center text-center m-5 mt-10">
          <CurlyTitles titleName={"Contact us"} />
          <div className="head-3">
            <h1>Feel Free to Contact us Anytime</h1>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <div>
              <label htmlFor="name">Full Name* </label>
              <div>
                <input type="text" placeholder="Full Name" required />
              </div>
            </div>

            <div>
              <label htmlFor="email">Email* </label>
              <div className="inp">
                <input type="email" placeholder="Email" required />
              </div>
            </div>

            <div>
              <label htmlFor="Message">Message* </label>
              <div>
                <textarea placeholder="Enter your message" required />
              </div>
            </div>

            <div className="text-center">
              <button type="submit">Send Us</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
