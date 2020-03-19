import React, { useRef } from "react";
import "../styles/AddItem.css";
import useInput from "../hooks/useInput";


function AddItem(props) {
  const [ name, handleName, setName ] = useInput();
  const [ description, handleDescription, setDescription ] = useInput();
  const [ category, handleCategory, setCategory ] = useInput();
  const [ price, handlePrice, setPrice ] = useInput();
  const [ inStock, handleInStock, setInStock ] = useInput();
  const nameRef = useRef(null);

  function dispatchClick(e) {
    e.preventDefault();
    const payload = { name, description, category, price, inStock };
    props.onClick(payload);
    setName("");
    setDescription("");
    setCategory("");
    setPrice("");
    setInStock("");
    nameRef.current.focus();
  }

  return (
    <form onSubmit={dispatchClick} className="add-item-form">
      <input type="text" placeholder="Product Name" value={name} onChange={handleName} ref={nameRef} />
      <input type="text" placeholder="Product Description" className="description" value={description} onChange={handleDescription} />
      <input type="text" placeholder="Product Category" value={category} onChange={handleCategory} />
      <input type="number" placeholder="Product Price" value={price} onChange={handlePrice} />
      <input type="number" placeholder="Product Stock" value={inStock} onChange={handleInStock} />
      <button>Add Item</button>
    </form>
  );
}

export default AddItem;