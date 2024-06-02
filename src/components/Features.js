import React from "react";

const features = [
  {
    title: "Premium Quality",
    image: "assets/feature-1.webp",
    tagline:
      "The quality and safety of our products is our top priority. We continue to quest for even greater product quality",
  },
  {
    title: "Always Fresh",
    image: "assets/feature-2.webp",
    tagline:
      "We are always committed to 100% fresh, organic food has a certificate of food safety certification",
  },
  {
    title: "Organic Farming",
    image: "assets/feature-3.webp",
    tagline:
      "Agricultural system that uses ecologically based pest controls and biological fertilizers derived largely from animal",
  },
];

const Features = () => {
  return (
    <div className="my-7 bg-[#f7f6f2]">
      <h1>Features</h1>

      <div className="ftr-container">
        <div className="title">
          <strong className="text-[#78b144] text-[2rem] italic font-black">
            Why Choose Us
          </strong>
        </div>

        <div className="ftr-row">
          <div className="block">
            <div class="block_content">
              <div class="block align-middle text-center">
                <img
                  src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/leaves_bede3183-15b2-42a5-9885-5597551ed12c_100x.png?v=1614305448"
                  alt=""
                />

                <div class="title font-700 text-uppercase">Always fresh</div>
                <div class="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div class="block">
                <img
                  src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/heath_ff26dec2-aad7-4f82-afd2-822ad05e5161_100x.png?v=1614305448"
                  alt=""
                />

                <div class="title font-700 text-uppercase">Super Healthy</div>
                <div class="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
