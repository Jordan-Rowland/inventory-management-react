import React, { useRef } from "react";
import "./styles/AddItem.css";
import useInput from "../../../hooks/useInput";


function AddItem(props) {
  const [name, handleName, setName] = useInput();
  const [description, handleDescription, setDescription] = useInput();
  const [category, handleCategory, setCategory] = useInput();
  const [price, handlePrice, setPrice] = useInput();
  const [inStock, handleInStock, setInStock] = useInput();
  const [imageUrl, handleImageUrl, setImageUrl] = useInput();
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
    setImageUrl("");
    nameRef.current.focus();
  }

  return (
    <form onSubmit={dispatchClick} className="add-item-form">
      <input type="text" placeholder="Product Name" className="half-width-input" value={name} onChange={handleName} ref={nameRef} />
      <input type="text" placeholder="Product Category" className="half-width-input" value={category} onChange={handleCategory} />
      <input type="url" placeholder="Product Image Url" value={imageUrl} onChange={handleImageUrl} />
      <textarea type="text" placeholder="Product Description" className="description" value={description} onChange={handleDescription} />
      <input type="number" placeholder="Product Price" className="half-width-input" value={price} onChange={handlePrice} />
      <input type="number" placeholder="Product Stock" className="half-width-input" value={inStock} onChange={handleInStock} />
      <button className="add-btn">Add Item</button>
    </form>
  );
}

export default AddItem;