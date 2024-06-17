import React from "react";
import SectionHeading from "../components/Headings/SectionHeading";
import AboutBg from "../data/assets/background/contact-bg.jpg";
import AboutDpBg from "../data/assets/background/about-dp-bg.png";
import CurlyTitles from "../components/Headings/CurlyTitles";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <div>
        <SectionHeading sectionName={"About"} sectionBg={AboutBg} />
        60+ products
        <CurlyTitles titleName={"Our Story"} />
        <div className="about-our-story">
          <p className="p-5 ">
            In 2018, an elderly man proposed a 50% partnership to cultivate
            vegetables on our field, which we accepted. However, when we decided
            to switch to organic farming, he left dissatisfied. Unfamiliar with
            large-scale vegetable production and unable to find workers, we
            continued the work ourselves. Selling the produce became a new
            challenge as local markets didn't recognize our organic farming
            efforts. We then found a local organization, Gram Seva Samiti, which
            offered market stalls for organic farmers. This opportunity helped
            us establish a presence in the market. Subsequently, a startup named
            Green and Grains from Bhopal approached us to purchase our organic
            products, which helped us expand our production. Everything was
            going well until the COVID-19 pandemic struck, causing the local
            market to shut down completely. Fortunately, the Bhopal market
            continued to support us during the initial lockdown. However, during
            the second phase, even the Bhopal market ceased operations, and our
            family fell ill with COVID-19, halting all activities and resulting
            in wasted produce. Determined to overcome these challenges, we
            devised a plan to dry our vegetables using a solar dryer, suggested
            by a friend, to preserve them until markets reopened. When the
            pandemic subsided, we were ready with our dried products but faced
            difficulties as both markets we relied on had not fully recovered.
            The Gram Seva Samiti market suffered from low producer participation
            and consumer awareness. We adapted by focusing on a smaller customer
            base, fulfilling the needs of 10-20 families with kitchen essentials
            like spices, pulses, grains, seasonal vegetables, and fruits. By
            slightly increasing prices, we managed to sustain our business.
            Eventually, the Bhopal market reopened, allowing us to expand our
            sales again. Our resilience and adaptability helped us navigate
            through these challenging times, leading to a stable and improved
            operation.
          </p>
        </div>
        <div className="about-founder">
          <CurlyTitles titleName={"Meet our Founders"} />
          <div className="flex justify-evenly mt-10">
            <div>
              <div className="about-dp">
                <img src={AboutBg} alt="" />
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
                <img src={AboutBg} alt="" />
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
