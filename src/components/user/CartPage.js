import "../../assets/styles/CartPage.css";
import React from "react";
import { useCart } from "../user/CartContext";

const CartPage = () => {
    const { cart, cartCount, notification, removeFromCart } = useCart();

    return (
        <div className="cart-page">
            <h1>Cart Page</h1>
            <p>Items in Cart: {cartCount}</p>
            {notification && <div className="notification">{notification}</div>}
            <ul>
                {cart.map((item, index) => (
                    <li key={index} className="cart-item">
                        <img src={item.img} alt={item.productName} className="cart-item-img" />
                        <div className="cart-item-details">
                            <h3>{item.productName}</h3>
                            <p>Coins needed: {item.coins}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartPage;
