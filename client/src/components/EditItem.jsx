import React, { useEffect, useState }  from "react";
import "../styles/EditItem.css";
import { useParams } from "react-router-dom";
import { fetchGet } from "../helpers";


function EditItem() {
  // TODO: This might be problematic
  const [ item, setItem ] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getItem() {
      const response = await fetchGet(`/api/items/${params.id}`);
      setItem(response)
    }

    getItem();
  }, [params.id])

  return (
    <div className="edit-modal">
      <div className="backdrop"></div>
      <div className="item">
        <input className="edit-input" type="text" value={item.name} />
        <input className="edit-input" type="text" value={item.price} />
        {/* TODO:
            Items need images
        */}
        {/* <img src={item.imageUrl} alt=""/> */}
        <textarea className="price edit-input" rows="10" type="text" value={item.description} />
        <div className="button-wrapper">
          <button>Update</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditItem;