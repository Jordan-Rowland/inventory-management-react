import React, { useEffect, useState } from "react";
import "../styles/ItemTable.css";
import InventoryItem from "./InventoryItem.jsx";
import { fetchGet } from "../helpers"
// import inventory from "../inventory";


function ItemTable() {
  const [ inventory, setInventory ] = useState([])

  useEffect(() => {
    async function getItems() {
      const response = await fetchGet(`/api/items`);
      setInventory(response);
    }
    getItems();
  });

  const rows = inventory.map(item => (
    <InventoryItem
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price / 100}
      inStock={item.inStock}
      category={item.category}
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
            <th>category</th>
            <th>price</th>
            <th>stock</th>
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