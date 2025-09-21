import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="w-[600px] grid grid-cols-3 gap-5 my-6">
      {cart.map((bottle) => (
        <div>
          <img src={bottle.img} alt="" />
          <button onClick={() => handleRemoveFromCart(bottle.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
