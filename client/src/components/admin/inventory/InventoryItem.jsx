import React from "react";
import "./styles/InventoryItem.css";
import { Link } from "react-router-dom";
import { useKeyPress } from "../../../hooks/useKeyPress";


function InventoryItem(props) {
  const altPress = useKeyPress('Alt');

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
      {
        altPress ?
          <td className="item-cell"><span onClick={dispatchDelete}>Delete</span></td> :
          <td className="item-cell"><Link to={`/inventory/${props._id}`}>Edit</Link></td>
      }
      <td><span onClick={dispatchRestock}>Restock</span></td>
    </tr>
  );
}

export default InventoryItem;