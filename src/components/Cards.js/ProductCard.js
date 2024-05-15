import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 p-1 bg-blue-100 rounded-lg h-[200px]">
      <img
        src={product.image}
        alt={product.name}
        className=" h-[150px] w-full w-[100px] bg-red-100"
      />
      <div className="mt-2">
        <h3 className="text-lg font-bold">{product.name}</h3>
        {/* You can add more details here if needed */}
      </div>
    </div>
  );
};

export default ProductCard;
