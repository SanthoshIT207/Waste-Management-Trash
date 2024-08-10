import "../../assets/styles/Shop.css";
import Camera from "../../assets/images/camera.jpg";
import Charger from "../../assets/images/charger.jpg";
import Ex from "../../assets/images/harddrive.jpg";
import Fd from "../../assets/images/pen.jpg";
import Headphones from "../../assets/images/headph.jpg";
import Keyboard from "../../assets/images/keyboard.jpg";
import Laptop from "../../assets/images/lap.jpg";
import Md from "../../assets/images/mem.jpg";
import Monitor from "../../assets/images/monitor.jpg";
import Mouse from "../../assets/images/mouse.jpg";
import Printer from "../../assets/images/printer.jpg";
import React, { useState } from "react";
import Router from "../../assets/images/router.jpg";
import Scanner from "../../assets/images/scanner.jpg";
import Smartphone from "../../assets/images/iphone.jpg";
import Smartwatch from "../../assets/images/watch.jpg";
import Tablet from "../../assets/images/tab.jpg";
import Webcam from "../../assets/images/scan.jpg";
import { useCart } from "../user/CartContext";

const posts = [
    { productName: 'Smartphone', link: 'https://vuejs.org/', coins: 300, img: Smartphone },
    { productName: 'Laptop', link: 'https://facebook.github.io/react/', coins: 1000, img: Laptop },
    { productName: 'Smartwatch', link: 'https://angularjs.org/', coins: 200, img: Smartwatch },
    { productName: 'Tablet', link: 'http://emberjs.com/', coins: 400, img: Tablet },
    { productName: 'Headphones', link: 'https://www.meteor.com/', coins: 150, img: Headphones },
    { productName: 'Camera', link: 'http://aurelia.io/', coins: 600, img: Camera },
    { productName: 'Monitor', link: 'https://pusher.com/', coins: 300, img: Monitor },
    { productName: 'Keyboard', link: 'http://feathersjs.com/', coins: 100, img: Keyboard },
    { productName: 'Mouse', link: 'http://feathersjs.com/', coins: 50, img: Mouse },
    { productName: 'Router', link: 'http://feathersjs.com/', coins: 120, img: Router },
    { productName: 'Printer', link: 'http://feathersjs.com/', coins: 250, img: Printer },
    { productName: 'Scanner', link: 'http://feathersjs.com/', coins: 200, img: Scanner },
    { productName: 'Webcam', link: 'http://feathersjs.com/', coins: 80, img: Webcam },
    { productName: 'External Hard Drive', link: 'http://feathersjs.com/', coins: 150, img: Ex },
    { productName: 'Flash Drive', link: 'http://feathersjs.com/', coins: 20, img: Fd },
    { productName: 'Memory Card', link: 'http://feathersjs.com/', coins: 30, img: Md },
    { productName: 'Charger', link: 'http://feathersjs.com/', coins: 25, img: Charger }
];

const Shop = () => {
    const [search, setSearch] = useState('');
    const { addToCart, notification, cartCount } = useCart();

    const filteredList = posts.filter(post => 
        post.productName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div id="app">
            <div className="search-wrapper">
                <input 
                    type="text" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder="Search product name.." 
                />
                <label>Search product name:</label>
            </div>
            <div className="wrapper">
                {filteredList.map((post, index) => (
                    <div className="card" key={index}>
                        <a href={post.link} target="_blank" rel="noopener noreferrer">
                            <img src={post.img} alt={post.productName} />
                            <small>Coins needed: {post.coins}</small>
                            <p>{post.productName}</p>
                        </a>
                        <button onClick={() => addToCart(post)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            {notification && <div className="notification">{notification}</div>}
            <div className="cart-info">
                <p>Items in Cart: {cartCount}</p>
            </div>
        </div>
    );
};

export default Shop;
