import React from "react";
import "../styles/ItemTable.css";
import InventoryItem from "./InventoryItem.jsx";


function ItemTable(props) {

  function dispatchEdit(id) {
    console.log(id);
  }

  function dispatchRestock(id) {
    // console.log(id);
    props.onRestock(id);
  }

  const rows = props.inventory.map(item => (
    <InventoryItem
      key={item._id}
      name={item.name}
      description={item.description}
      category={item.category}
      price={item.price}
      inStock={item.inStock}
      onEdit={() => dispatchEdit(item._id)}
      onRestock={() => dispatchRestock(item._id)}
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
            <th colSpan="2">options</th>
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