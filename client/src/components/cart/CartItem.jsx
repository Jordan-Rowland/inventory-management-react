import React from "react";
import "./styles/CartItem.css";


function CartItem({ item }) {

  return (
    <div className="cart-item">
      <img src={item.imageUrl} width="130px" alt="" />
      <p>{item.price}</p>
    </div>
  );
}

export default CartItem;
