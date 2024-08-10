import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [notification, setNotification] = useState("");

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
        setCartCount(prevCount => prevCount + 1);
        setNotification(`${product.productName} has been added to your cart.`);
        setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter(item => item !== product);
        setCart(updatedCart);
        setCartCount(prevCount => prevCount - 1);
        setNotification(`${product.productName} has been removed from your cart.`);
        setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
    };

    return (
        <CartContext.Provider value={{ cart, cartCount, notification, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
