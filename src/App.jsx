import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import data from "./data";

import { useShoppingCart } from "./hooks";
import { ProductContext, CartContext } from "./contexts";

const App = () => {
  const [products, cart, addItem, removeItem] = useShoppingCart(data);
  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem, removeItem }}>
        <CartContext.Provider value={{ cart }}>
          <Navigation />
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default App;
