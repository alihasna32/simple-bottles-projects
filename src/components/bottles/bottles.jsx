import React, { use, useEffect, useState } from "react";
import Bottle from "../bottle/bottle";
import {
  addToStoredCart,
  getStoreCart,
  removeFromCart,
} from "../../utilities/localStorage";
import Cart from "../cart/cart";
const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCartIds = getStoreCart();

    const storedCart = [];

    for (const id of storedCartIds) {
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    setCart(storedCart);
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);

    addToStoredCart(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const reaminingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(reaminingCart);
    removeFromCart(id);
  };

  return (
    <div>
      <h1>bottles {bottles.length}</h1>
      <p>Added Cart {cart.length}</p>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

      <div className="grid grid-cols-3 gap-4">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
