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
    <div className="m-[55px] bg-red-200">
      <h1>Features</h1>

      <div className="feature-box flex relative justify-evenly flex-wrap ml-auto mr-auto gap-5 align-middle text-center bg-blue-300 ">
        {features.map((feature, index) => (
          <div
            className="feature-subBox flex  flex-col relative w-[30%] p-10"
            key={index}
          >
            <figure className="img-box flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-[90px] h-[90px]"
              />
            </figure>

            <h1 className="text-[18px] font-extrabold">{feature.title}</h1>
            <p>{feature?.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
