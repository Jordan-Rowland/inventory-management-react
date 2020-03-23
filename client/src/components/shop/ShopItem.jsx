import React from "react";
import "./styles/ShopItem.css"


function ShopItem(props) {
  return (
    <div className="feature-card">
      <div className={`feature-card-img ${props.otherClasses}`}>
        <img src={props.img} alt="" />
      </div>
      <div className="feature-details">
        <p className="product-name">{props.name}</p>
        {/* <p>{props.description}</p> */}
        <p>${props.price}</p>
      </div>
    </div>
  );
}

export default ShopItem;