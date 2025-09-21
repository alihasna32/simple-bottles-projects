import React from "react";

const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, stock } = bottle;
  return (
    <div className="border border-gray-300 p-3 rounded-2xl space-y-2">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>Price: {price}$</p>
      <p>Available: {stock}</p>
      <button
        onClick={() => handleAddToCart(bottle)}
        className="cursor-pointer border border-gray-300 p-2 rounded-xl"
      >
        Buy Now
      </button>
    </div>
  );
};

export default Bottle;
