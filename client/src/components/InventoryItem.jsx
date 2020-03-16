import React from "react";
// import "../styles/InventoryItem.css";


function InventoryItem(props) {


  return (
    <tr className="item-row">
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.price}</td>
      <td>{props.inStock}</td>
      <td><button>Edit</button></td>
      <td><button>Re-Stock</button></td>
    </tr>
  );
}

export default InventoryItem;