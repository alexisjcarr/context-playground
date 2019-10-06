import React, { useContext } from "react";
import { CartContext } from "../contexts";

const Item = ({ image, title, price, id }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="shopping-cart_item">
      <img src={image} alt={`${title} book`} />

      <div>
        <h1>{title}</h1>
        <p>$ {price}</p>
        <button onClick={() => removeItem(id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
