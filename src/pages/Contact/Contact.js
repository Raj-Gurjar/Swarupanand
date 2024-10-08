/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import contactBg from "../../data/assets/background/contact-bg.webp";
import ContactCard from "../../components/Cards/ContactCard";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import SectionHeading from "../../components/Headings/SectionHeading";
import CurlyTitles from "../../components/Headings/CurlyTitles";
import { FaYoutube } from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";
import ContactForm from "./ContactForm";
import "./Contact.scss";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-section">
      <SectionHeading sectionName={"Contact"} sectionBg={contactBg} />

      <div>
        <div className="contact-card-container " data-aos="fade-up">
          <ContactCard
            icon={<FaLocationDot />}
            head="Address"
            data="1234 Oakwood Lane, Springfield, Illinois, 62704, USA"
          />
          <ContactCard
            icon={<FaPhoneVolume />}
            head="Phone No."
            data={`+1 312-555-6789, +1 312-555-9876`}
          />
          <ContactCard
            icon={<IoIosMail />}
            head="Email"
            data="info@randomcompany.com"
          />
        </div>

        <div className="mx-[15px]" data-aos="fade-up">
          <CurlyTitles titleName={"follow us on"} />

          <div className="flex wrap opp-border bg-[#84bb16] p-5 my-5 mb-[100px] sm:mx-[5px] lg:mx-[80px]  justify-evenly gap-5 text-center align-middle">
            <div className="contact-social">
              <a href="social-media-links" target="_blank" rel="external">
                <p className="contact-icon  text-white hover:text-[#f46f30]">
                  <FaInstagram />
                </p>
                Instagram
              </a>
            </div>
            <div className="contact-social">
              <a href="social-media-links" target="_blank" rel="external">
                <p className="contact-icon  text-white  hover:text-[#1877f2]">
                  <FaFacebook />
                </p>
                Facebook
              </a>
            </div>
            <div className="contact-social">
              <a href="social-media-links" target="_blank" rel="external">
                <p className="contact-icon  text-white hover:text-[#25d366]">
                  <RiWhatsappFill />
                </p>
                Whatsapp
              </a>
            </div>
            <div className="contact-social">
              <a href="social-media-links" target="_blank" rel="external">
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
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1234%20Oakwood%20Lane,%20Springfield&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div> */}

        <div
          className="flex flex-col justify-center text-center m-5 mt-10"
          data-aos="fade-up"
        >
          <CurlyTitles titleName={"Contact us"} />
          <div className="curly-subTitle">
            <h1>Feel Free to Contact us Anytime</h1>
          </div>
        </div>

        <div data-aos="fade-up">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}
