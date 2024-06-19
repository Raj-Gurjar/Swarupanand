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
import { FaYoutube } from "react-icons/fa6";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact-section">
      <SectionHeading sectionName={"Contact"} sectionBg={contactBg} />

      <div>
        <div className="px-[80px] flex gap-5 justify-around">
          <ContactCard
            icon={<FaLocationDot />}
            head="Address"
            data="Ward no.03 Dharamkundi, post Satwasa, tehi-Seoni Malwa, district-Narmadapurm, MP, 461221"
          />
          <ContactCard
            icon={<FaPhoneVolume />}
            head="Phone No."
            data={`+91 7987049181, +91 8889507870`}
          />
          <ContactCard
            icon={<IoIosMail />}
            head="Email"
            data="arpangour80@gmail.com"
          />
        </div>

        <div className="">
          <CurlyTitles titleName={"follow us on"} />

          <div className="flex opp-border bg-[#84bb16] p-5 my-5 mb-[100px] mx-[80px]  justify-evenly gap-5 text-center align-middle">
            <div className="contact-social">
              <a href="www.google.com">
                <p className="contact-icon  text-white hover:text-[#f46f30]">
                  <FaInstagram />
                </p>
                Instagram
              </a>
            </div>
            <div className="contact-social">
              <a href="www.google.com">
                <p className="contact-icon  text-white  hover:text-[#1877f2]">
                  <FaFacebook />
                </p>
                Facebook
              </a>
            </div>
            <div className="contact-social">
              <a href="www.google.com">
                <p className="contact-icon  text-white hover:text-[#25d366]">
                  <RiWhatsappFill />
                </p>
                Whatsapp
              </a>
            </div>
            <div className="contact-social">
              <a href="www.google.com">
                <p className="contact-icon  text-white hover:text-[#ff0000]">
                  <FaYoutube />
                </p>
                Youtube
              </a>
            </div>
          </div>
        </div>

        {/* <div className="g-map-container">
          <iframe
            width="100%"
            height="600"
            // frameborder="0"
            // scrolling="no"
            // margineight="0"
            // marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=gupta%20ground,narmadapuram+(Home)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div> */}

        <div className="flex flex-col justify-center text-center m-5 mt-10">
          <CurlyTitles titleName={"Contact us"} />
          <div className="head-3">
            <h1>Feel Free to Contact us Anytime</h1>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}
