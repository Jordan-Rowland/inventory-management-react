import React, { useEffect, useState } from "react";
// import useStorage from "./hooks/useStorage"
import { fetchPost } from "./helpers";
import ItemTable from "./components/ItemTable.jsx"
import AddItem from "./components/AddItem.jsx"
import { fetchGet } from "./helpers"


function App() {

  const [ inventory, setInventory ] = useState([])

  useEffect(() => {
    async function getItems() {
      const response = await fetchGet("/api/items");
      setInventory(response);
    }
    getItems();
  });

  async function handleAddItemClick(payload) {
    console.table(payload);
    const response = await fetchPost("/api/items", payload);
    if (response.success) {
      const newInventory = [...inventory, payload];
      setInventory(newInventory);
    }
  };

  async function handleRestock(id) {
    const newInventory = [...inventory];
    const updatedItemIndex = newInventory.findIndex(item => item._id === id);
    // Add conditional to make sure stock is less than 25
    const response = await fetchPost(`/api/items/${id}`, { inStock: 25 });
    newInventory[updatedItemIndex].inStock = 25;
    if (response.success) {
      setInventory(newInventory);
    }
  }

  return(
    <>
      <ItemTable inventory={inventory} onRestock={handleRestock} />
      <AddItem onClick={handleAddItemClick} />
    </>
  );
}

export default App;