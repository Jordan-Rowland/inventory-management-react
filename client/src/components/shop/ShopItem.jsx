import React from "react";
import "./styles/ShopItem.css"


function ShopItem(props) {
  return (
    <div className="product-card">
      <div className={`product-card-img ${props.otherClasses}`}>
        <img src={props.img} alt="" />
      </div>
      <div className="product">
        {/* TODO:
        Inline these with flexbox so they're side by side */}

        <p className="product-name">{props.name}</p>
        <div className="product-details">
          <p>${props.price}</p>
          <p className="stock"><span className="stock-num">{props.inStock}</span> in stock</p>
        </div>
        <div className="add-to-cart">
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;