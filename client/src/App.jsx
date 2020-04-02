import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchGet, fetchPost, fetchDelete } from "./helpers";
import useStorage from "./hooks/useStorage";
import Header from "./components/Header.jsx"
import ItemTable from "./components/admin/inventory/ItemTable.jsx";
import AddItem from "./components/admin/inventory/AddItem.jsx";
import EditItem from "./components/admin/inventory/EditItem.jsx";
import ShopItemsContainer from "./components/shop/ShopItemsContainer.jsx";
import Cart from "./components/cart/Cart.jsx"


function App() {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartStorage, setCartStorage] = useStorage("cart");

  useEffect(() => {
    async function getItems() {
      const response = await fetchGet("/api/items");
      setInventory(response);
    }
    getItems();
    if (cartStorage) {
      setCart(cartStorage);
    }
  }, []);

  async function handleAddItemClick(payload) {
    console.table(payload);
    const response = await fetchPost("/api/items", payload);
    if (response.success) {
      console.log(response)
      const newInventory = [...inventory, { ...payload, _id: response._id }];
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
    const response = await fetchDelete(`/api/items/${id}`);
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

  return (
    <>
      <Header />
      <Switch>
        <Route path="/inventory/">
          <ItemTable inventory={inventory} onRestock={handleRestock} onDelete={handleDelete} />
          <AddItem onClick={handleAddItemClick} />
          <Route path="/inventory/:id">
            <EditItem onUpdate={handleUpdate} onDelete={handleDelete} />
          </Route>
        </Route>
        <Route path="/shop/">
          <ShopItemsContainer inventory={inventory} />
        </Route>
        <Route exact path="/cart">
          <Cart items={inventory} />
        </Route>
      </Switch>
    </>
  );
}

export default App;