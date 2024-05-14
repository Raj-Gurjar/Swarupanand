import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <div className="mt-2">
        <h3 className="text-lg font-bold">{product.name}</h3>
        {/* You can add more details here if needed */}
      </div>
    </div>
  );
};

export default ProductCard;
