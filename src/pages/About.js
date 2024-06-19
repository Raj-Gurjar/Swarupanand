import React from "react";
import SectionHeading from "../components/Headings/SectionHeading";
import AboutBg from "../data/assets/background/contact-bg.jpg";
import FounderDp from "../data/assets/founder.jpg";
import CoFounderDp from "../data/assets/co-founder.jpg";
import AboutDpBg from "../data/assets/background/about-dp-bg.png";
import CurlyTitles from "../components/Headings/CurlyTitles";
import Footer from "../components/Footer";
import { BsPersonLinesFill } from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import { MdOutlineGppGood } from "react-icons/md";
import { RiPlantLine } from "react-icons/ri";
import { BsBoxes } from "react-icons/bs";

export default function About() {
  return (
    <div className="about-section">
      <div>
        <SectionHeading sectionName={"About"} sectionBg={AboutBg} />

        <div className="about-our-story">
          <div className="about-stats">
            <div className="flex gap-5 flex-col justify-around">
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
            <div className="flex gap-5 flex-col justify-around">
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
          <div className="about-story-text">
            <CurlyTitles titleName={"Our Story"} />
            <p className="">
              In 2018, an elderly man proposed a 50% partnership to cultivate
              vegetables on our field, which we accepted. However, when we
              decided to switch to organic farming, he left dissatisfied.
              Unfamiliar with large-scale vegetable production and unable to
              find workers, we continued the work ourselves. Selling the produce
              became a new challenge as local markets didn't recognize our
              organic farming efforts. We then found a local organization, Gram
              Seva Samiti, which offered market stalls for organic farmers. This
              opportunity helped us establish a presence in the market.
            </p>
            <p className="">
              Subsequently, a startup named Green and Grains from Bhopal
              approached us to purchase our organic products, which helped us
              expand our production. Everything was going well until the
              COVID-19 pandemic struck, causing the local market to shut down
              completely. Fortunately, the Bhopal market continued to support us
              during the initial lockdown. However, during the second phase,
              even the Bhopal market ceased operations, and our family fell ill
              with COVID-19, halting all activities and resulting in wasted
              produce. Determined to overcome these challenges, we devised a
              plan to dry our vegetables using a solar dryer, suggested by a
              friend, to preserve them until markets reopened. When the pandemic
              subsided, we were ready with our dried products but faced
              difficulties as both markets we relied on had not fully recovered.
              The Gram Seva Samiti market suffered from low producer
              participation and consumer awareness. We adapted by focusing on a
              smaller customer base, fulfilling the needs of 10-20 families with
              kitchen essentials like spices, pulses, grains, seasonal
              vegetables, and fruits. By slightly increasing prices, we managed
              to sustain our business. Eventually, the Bhopal market reopened,
              allowing us to expand our sales again. Our resilience and
              adaptability helped us navigate through these challenging times,
              leading to a stable and improved operation.
            </p>
          </div>
        </div>
        <div className="about-founder">
          <CurlyTitles titleName={"Meet our Founders"} />
          <div className="flex justify-evenly mt-10">
            <div>
              <div className="about-dp">
                <img src={FounderDp} alt="" />
              </div>

              <div className="about-dp-text">
                <h1>Rakesh Gour</h1>
                <h2>Founder</h2>

                <div className="about-dp-bg">
                  <img src={AboutDpBg} alt="" />
                  <img src={AboutDpBg} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="about-dp">
                <img src={CoFounderDp} alt="" />
              </div>

              <div className="about-dp-text">
                <h1>Arpan Gour</h1>
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
