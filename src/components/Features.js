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
    <div className="py-10 px-1 bg-[#f7f6f2]">
      <div className="bg-white m-auto align-middle pt-5 flex justify-center">
        <img
          className=""
          src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/bf_testimonial_6f200640-5f02-405d-a191-a33238a18435_1920x.png?v=1636451949"
          alt="ftr-container-top"
        />
      </div>
      <div className="ftr-container">
        <div className="ftr-title">
          <img
            src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/icon_70x.png?v=1637033618"
            alt="ftr-title img"
          />

          <strong className="text-[#78b144]">Why Choose Us</strong>
        </div>

        <div className="ftr-row">
          <div className="block_text">
            <div className="block_content">
              <div className="block">
                <img
                  src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/leaves_bede3183-15b2-42a5-9885-5597551ed12c_100x.png?v=1614305448"
                  alt=""
                />

                <div className="sub-title font-700 text-uppercase">
                  Always fresh
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="block">
                <img
                  src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/heath_ff26dec2-aad7-4f82-afd2-822ad05e5161_100x.png?v=1614305448"
                  alt=""
                />

                <div className="sub-title font-700 text-uppercase">
                  Super Healthy
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="block_img block-2">
            <div className="response_image">
              <img
                className=""
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
                data-widths="[360, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048]"
                data-aspectratio="1.5502958579881656"
                data-sizes="auto"
                alt=""
                data-srcset="//freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_360x.png?v=1614305453 360w, //freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_540x.png?v=1614305453 540w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_720x.png?v=1614305453 720w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_900x.png?v=1614305453 900w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1080x.png?v=1614305453 1080w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1296x.png?v=1614305453 1296w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1512x.png?v=1614305453 1512w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1728x.png?v=1614305453 1728w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1944x.png?v=1614305453 1944w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_2048x.png?v=1614305453 2048w"
                sizes="290px"
                srcset="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_360x.png?v=1614305453 360w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_540x.png?v=1614305453 540w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_720x.png?v=1614305453 720w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_900x.png?v=1614305453 900w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1080x.png?v=1614305453 1080w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1296x.png?v=1614305453 1296w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1512x.png?v=1614305453 1512w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1728x.png?v=1614305453 1728w, //freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1944x.png?v=1614305453 1944w, //freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_2048x.png?v=1614305453 2048w"
              />
            </div>
          </div>

          <div className="block_text text-center">
            <div className="block_content">
              <div className="block">
                <img
                  src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/tree_deac4877-356e-4442-ad8d-7f313e2da1f9_100x.png?v=1614305448"
                  alt=""
                />

                <div className="sub-title font-700 text-uppercase">
                  100% Natural
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="block">
                <img
                  src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/hc_b7263177-3674-4b61-bbee-f3b584d040cb_100x.png?v=1614305448"
                  alt=""
                />

                <div className="sub-title font-700 text-uppercase">
                  Premium Quality
                </div>
                <div className="desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
