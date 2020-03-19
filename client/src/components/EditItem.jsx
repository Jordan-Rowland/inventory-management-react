import React, { useEffect }  from "react";
import "../styles/EditItem.css";
import { useHistory, useParams } from "react-router-dom";
import { fetchGet } from "../helpers";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";


function EditItem(props) {
  // TODO: This might be problematic
  const [ name, handleName, setName ] = useInput();
  const [ description, handleDescription, setDescription ] = useInput();
  const [ category, handleCategory, setCategory ] = useInput();
  const [ price, handlePrice, setPrice ] = useInput();
  const [ inStock, handleInStock, setInStock ] = useInput();
  const params = useParams();
  const history = useHistory();


  useEffect(() => {
    async function getItem() {
      const response = await fetchGet(`/api/items/${params.id}`);
      setName(response.name);
      setDescription(response.description);
      setCategory(response.category);
      setPrice(response.price);
      setInStock(response.inStock);
    }

    getItem();
  }, [params.id])

  async function dispatchUpdate(e) {
    e.preventDefault();
    const data = {
      name,
      description,
      category,
      price,
      inStock,
    }
    props.onUpdate(params.id, data);

    history.push("/")
  }

  return (
    <div className="edit-modal">
      <div className="backdrop"></div>
      <form onSubmit={dispatchUpdate} className="item">
        <h1 className="headline">Edit Item</h1>
        <label>
          Name
        </label>
          <input className="edit-input" type="text" value={name} onChange={handleName} />
        <label>
          Price
        </label>
          <input className="edit-input" type="number" value={price} onChange={handlePrice} />
        <label>
          Category
        </label>
          <input className="edit-input" type="text" value={category} onChange={handleCategory} />
        <label>
          Stock
        </label>
          <input className="edit-input" type="number" value={inStock} onChange={handleInStock} />
        {/* TODO:
            Items need images
        */}
        {/* <img src={imageUrl} alt=""/> */}

        <label>
          Description
        </label>
          <textarea
            className="edit-input"
            rows="10"
            type="text"
            value={description}
            onChange={handleDescription}
          />
        <div className="button-wrapper">
          <button>Update</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default EditItem;