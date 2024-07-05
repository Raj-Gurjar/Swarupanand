import React from "react";
import fresh_img from "../../data/assets/Features/fresh.png";
import natural_img from "../../data/assets/Features/natural.png";
import healthy_img from "../../data/assets/Features/healthy.png";
import quality_img from "../../data/assets/Features/quality.png";

const FeatureBlock = ({ image, title, tagline }) => (
  <div className="block">
    <img src={image} alt={title} />
    <div className="sub-title font-700 text-uppercase">{title}</div>
    <div className="desc text-[14px]">
      <p>{tagline}</p>
    </div>
  </div>
);

const Features = () => (
  <div className="my-[4rem] px-1 bg-[#f7f6f2] overflow-hidden">
    <div className="bg-white m-auto align-middle pt-5 flex justify-center">
      <img
        src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/bf_testimonial_6f200640-5f02-405d-a191-a33238a18435_1920x.png?v=1636451949"
        alt="Feature container top"
      />
    </div>
    <div className="ftr-container">
      <div className="ftr-title">
        <img
          src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/icon_70x.png?v=1637033618"
          alt="Feature title"
        />
        <strong className="text-[#78b144]">Why Choose Us</strong>
      </div>
      
      <div className="ftr-row">
        <div className="block_text">
          <div className="block_content">
            <FeatureBlock
              image={fresh_img}
              title="Always Fresh"
              tagline="Our commitment is to provide 100% fresh and organic food. We continually strive to enhance product quality, ensuring you receive the best organic food available."
            />
            <FeatureBlock
              image={healthy_img}
              title="Super Healthy"
              tagline="Our organic produce is packed with essential nutrients and free from harmful chemicals, promoting a healthier lifestyle for you and your family."
            />
          </div>
        </div>
        <div className="block_img block-2">
          <div className="response_image">
            <img
              className=""
              src="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_360x.png?v=1614305453"
              srcSet="https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_360x.png?v=1614305453 360w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_540x.png?v=1614305453 540w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_720x.png?v=1614305453 720w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_900x.png?v=1614305453 900w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1080x.png?v=1614305453 1080w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1296x.png?v=1614305453 1296w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1512x.png?v=1614305453 1512w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1728x.png?v=1614305453 1728w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_1944x.png?v=1614305453 1944w, https://freshmart-vinovatheme.myshopify.com/cdn/shop/files/img-vegetables_2048x.png?v=1614305453 2048w"
              sizes="290px"
              alt="Vegetables"
            />
          </div>
        </div>
        <div className="block_text text-center">
          <div className="block_content">
            <FeatureBlock
              image={quality_img}
              title="Premium Quality"
              tagline="The quality and safety of our products are our top priorities.Every product is certified by the Food Safety and Standards Authority of India (FSSAI), ensuring top-notch quality and safety."
            />
            <FeatureBlock
              image={natural_img}
              title="100% Natural"
              tagline="Our farming practices ensure that all produce is 100% natural, free from synthetic pesticides and fertilizers, providing you with food that's as close to nature as possible."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
