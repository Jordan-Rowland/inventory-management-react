import React from "react";
import "./styles/ShopItemsContainer.css";
import ShopItem from "./ShopItem.jsx"


function ShopItemsContainer({ inventory }) {

  console.log(inventory)

  const items = inventory.map(item => (
    <ShopItem
      key={item._id}
      name={item.name}
      price={item.price}
      inStock={item.inStock}
      img={item.imageUrl}
    />
  ));

  return (
    <div className="card-container">
      {items}
    </div>
  );
}

export default ShopItemsContainer;