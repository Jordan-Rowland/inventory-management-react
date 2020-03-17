import React from "react";
import "../styles/InventoryItem.css";
import { Link } from "react-router-dom";


function InventoryItem(props) {

  function dispatchEdit(id) {
    props.onEdit(id)
  }

  function dispatchRestock(id) {
    props.onRestock(id)
  }

  function dispatchDelete(id) {
    props.onDelete(id)
  }

  return (
    <tr className="item-row">
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.price}</td>
      <td>{props.inStock}</td>
      {/* TODO:
          Edit is passing the delete function
      */}
      <td><Link to={`/${props._id}`}>Edit</Link></td>
      <td><span onClick={dispatchRestock}>Restock</span></td>
    </tr>
  );
}

export default InventoryItem;