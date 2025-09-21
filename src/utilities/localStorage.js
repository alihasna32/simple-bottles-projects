const getCartFromLocalStorage = () => {
  const storageCartString = localStorage.getItem("cart");

  if (storageCartString) {
    const storedCart = JSON.parse(storageCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  saveCartToLocalStorage(newCart);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartToLocalStorage(remainingCart);
};

export {
  getCartFromLocalStorage as getStoreCart,
  addItemToCartLocalStorage as addToStoredCart,
  removeFromLocalStorage as removeFromCart,
};
