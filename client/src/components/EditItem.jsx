import React, { useEffect, useState }  from "react";
import "../styles/EditItem.css";
import { useParams } from "react-router-dom";
import { fetchGet } from "../helpers"


function EditItem() {
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
    <div className="item">
      <h1>{item.name}</h1>
      <h5 className="price">{item.price}</h5>
      {/* TODO:
          Items need images
      */}
      {/* <img src={item.imageUrl} alt=""/> */}
      <p>{item.description}</p>
    </div>
  );
}

export default EditItem;