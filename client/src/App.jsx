import React, { useEffect, useState } from "react";
// import useStorage from "./hooks/useStorage"
import { Route, Switch } from "react-router-dom";
import ItemTable from "./components/ItemTable.jsx"
import AddItem from "./components/AddItem.jsx"
import { fetchGet, fetchPost, fetchDelete } from "./helpers"
import EditItem from "./components/EditItem.jsx"


function App() {
  const [ inventory, setInventory ] = useState([])

  useEffect(() => {
    async function getItems() {
      const response = await fetchGet("/api/items");
      setInventory(response);
    }
    getItems();
  }, []);

  async function handleAddItemClick(payload) {
    console.table(payload);
    const response = await fetchPost("/api/items", payload);
    if (response.success) {
      console.log(response)
      const newInventory = [...inventory, {...payload, _id: response._id}];
      setInventory(newInventory);
    } else {
      console.log(response);
    }
  };

  async function handleRestock(id) {
    const newInventory = [...inventory];
    const updatedItemIndex = newInventory.findIndex(item => item._id === id);
    // TODO:
    // Add conditional to make sure stock is less than 25
    // TODO:
    // the stock update is defaulted to 25
    const response = await fetchPost(`/api/items/${id}`, { inStock: 25 });
    newInventory[updatedItemIndex].inStock = 25;
    if (response.success) {
      setInventory(newInventory);
    } else {
      console.log(response);
    }
  }

  async function handleDelete(id) {
    const newInventory = inventory.filter(item => item._id !== id);
    const response = await fetchDelete(`/api/items/${id}`, { inStock: 25 });
    if (response.success) {
      setInventory(newInventory);
    } else {
      console.log(response);
    }
  }

  async function handleUpdate(id, data) {
    const newInventory = [...inventory];
    const updatedItemIndex = newInventory.findIndex(item => item._id === id);
    newInventory[updatedItemIndex] = { ...data, _id: id }
    const response = await fetchPost(`/api/items/${id}`, { ...data });
    if (response.success) {
      setInventory(newInventory);
    } else {
      console.log(response);
    }
  }

  return(
    <>
      <Switch>
        <Route path="/">
          <ItemTable inventory={inventory} onRestock={handleRestock} onDelete={handleDelete} />
          <AddItem onClick={handleAddItemClick} />
        <Route path="/:id">
          <EditItem onUpdate={handleUpdate} />
        </Route>
        </Route>
      </Switch>
    </>
  );
}

export default App;