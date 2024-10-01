import React, { useEffect } from "react";
import SectionHeading from "../../components/Headings/SectionHeading";
import AboutBg from "../../data/assets/background/contact-bg.webp";
import FounderDp from "../../data/assets/founder.jpg";
import CoFounderDp from "../../data/assets/co-founder.jpeg";
import AboutDpBg from "../../data/assets/background/about-dp-bg.webp";
import CurlyTitles from "../../components/Headings/CurlyTitles";
import Footer from "../../components/Footer/Footer";

import { MdOutlineGppGood } from "react-icons/md";
import { RiPlantLine } from "react-icons/ri";
import { BsBoxes } from "react-icons/bs";
import "./About.scss";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-section">
      <div>
        <SectionHeading sectionName={"About"} sectionBg={AboutBg} />

        <div className="about-our-story">
          <div
            className="about-stats"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <div className="about-stats-col">
              <div className="about-stat-box">
                <span>
                  <i>
                    <BsBoxes />
                  </i>
                </span>
                <h1>60+ Products</h1>
                <p>
                  We offer a diverse range of over 60 high-quality organic
                  products, ensuring you have access to fresh and healthy
                  options.
                </p>
              </div>
            </div>
            <div className="about-stats-col">
              <div className="about-stat-box">
                <span>
                  <i>
                    <MdOutlineGppGood />
                  </i>
                </span>
                <h1>FSSAI Approved</h1>
                <p>
                  Our products are certified by the Food Safety and Standards
                  Authority of India, ensuring the highest quality and safety.
                </p>
              </div>
              <div className="about-stat-box">
                <span>
                  <i>
                    <RiPlantLine />
                  </i>
                </span>
                <h1>100% Organic</h1>
                <p>
                  Committed to sustainable and eco-friendly farming practices,
                  all our products are 100% organic and naturally grown.
                </p>
              </div>
            </div>
          </div>
          <div className="about-story-text" data-aos="fade-left">
            <CurlyTitles titleName={"Our Story"} />
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
              aliquid, reiciendis laboriosam perspiciatis maiores molestiae
              minima, tempora asperiores error libero impedit adipisci et facere
              voluptate praesentium itaque quam porro modi est ex! Amet eum
              soluta quis assumenda accusantium, ipsum earum quaerat? A soluta
              doloremque maxime neque ea, veniam placeat, assumenda molestias
              accusantium eum provident, magni corporis exercitationem nemo at
              qui quidem! Magnam illum corporis itaque suscipit accusantium,
              obcaecati, veniam vel voluptas temporibus, error dolore? Beatae
              adipisci possimus optio vitae odio corporis, accusamus laborum
              corrupti ducimus, dolorum culpa labore velit unde rerum
              praesentium deleniti similique repellat facilis obcaecati
              repellendus blanditiis? Tempora.
            </p>
            <p className=" mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              doloribus inventore, praesentium beatae error minima voluptate,
              iusto sunt unde quae ex, itaque repudiandae eum impedit quasi
              blanditiis ea ab! Officiis quod, odit eaque rem perspiciatis autem
              dignissimos, facilis tempora sint, similique dicta voluptatem
              iste? Sint nostrum distinctio quasi, autem labore enim. Esse nam
              cumque quibusdam eveniet rerum laboriosam officia accusamus minima
              dolore nemo optio sapiente quia facilis voluptatibus, totam
              praesentium, modi ad deleniti, labore quasi adipisci natus
              cupiditate quos ex? Adipisci architecto explicabo ab assumenda cum
              animi? Odit officiis iusto quos omnis quod corporis. Illum dolorum
              neque sapiente hic aspernatur!
            </p>
            <p className=" mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              recusandae sit, fuga, nam laudantium ipsum ex mollitia,
              dignissimos ea nulla eos debitis laboriosam nemo repudiandae nisi
              beatae delectus corporis saepe enim inventore eaque pariatur
              exercitationem. Beatae ipsum alias necessitatibus assumenda
              magnam, debitis tempore est voluptas praesentium nulla. Odio,
              atque vel.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <CurlyTitles titleName={"Meet our Founders"} />
          <div className="about-founder">
            <div>
              <div className="about-dp" data-aos="zoom-in">
                <img src={FounderDp} alt="" />
              </div>

              <div className="about-dp-text">
                <h1>Ethan Cooper</h1>
                <h2>Founder</h2>

                <div className="about-dp-bg">
                  <img src={AboutDpBg} alt="" />
                  <img src={AboutDpBg} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="about-dp" data-aos="zoom-in">
                <img src={CoFounderDp} alt="" />
              </div>

              <div className="about-dp-text">
                <h1>Arjun Mehta</h1>
                <h2>Co-Founder</h2>

                <div className="about-dp-bg">
                  <img src={AboutDpBg} alt="" />
                  <img src={AboutDpBg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
