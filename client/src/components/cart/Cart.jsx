import React from "react";
import "./styles/Cart.css";
import CartItem from "./CartItem.jsx";


function Cart({ items }) {

    const cart_items = items.map(item => <CartItem item={item} />)
    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <hr />
            <div>
                {cart_items}
            </div>
        </div>
    );
}

export default Cart;