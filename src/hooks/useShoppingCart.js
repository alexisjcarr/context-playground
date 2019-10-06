import { useState } from "react";

export const useShoppingCart = data => {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = itemID => {
    const filteredCart = cart.filter(wantedItem => wantedItem.id !== itemID);
    setCart(filteredCart);
  };

  return [products, cart, addItem, removeItem];
};
