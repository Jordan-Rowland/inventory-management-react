import React from "react";
import "../styles/ItemTable.css";
import InventoryItem from "./InventoryItem.jsx";
import inventory from "../inventory"


function ItemTable() {

  const rows = inventory.map(item => (
    <InventoryItem
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      inStock={item.inStock}
    />
  ))

  return (
    <div className="main">
      <h1>Inventory</h1>
      <table>
        <thead>
          <tr className="header-row">
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>in stock</th>
            <th colspan="2">options</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;