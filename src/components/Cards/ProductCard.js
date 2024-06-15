import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="mt-2">
        <h3 className="text-lg font-bold capitalize">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
