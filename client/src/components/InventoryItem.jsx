import React from "react";
import "../styles/InventoryItem.css";


function InventoryItem(props) {

  function dispatchEdit(id) {
    props.onEdit(id)
  }

  function dispatchRestock(id) {
    props.onRestock(id)
  }

  // function dispatchDelete(id) {
  //   props.onDelete(id)
  // }

  return (
    <tr className="item-row">
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.price}</td>
      <td>{props.inStock}</td>
      <td><span onClick={dispatchEdit}>Edit</span></td>
      <td><span onClick={dispatchRestock}>Restock</span></td>
    </tr>
  );
}

export default InventoryItem;