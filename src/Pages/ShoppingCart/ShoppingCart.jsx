import { useState, useEffect } from "react";
import "./Shopping.css";
import CartCard from "../../Components/CartCard/CartCard";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  function BuyStuff() {
    localStorage.clear()
    Location.reload()
  }
  

  useEffect(() => {
    const storedCartItems = [];

    for (let i = 1; i <= 20; i++) {
      const items = JSON.parse(localStorage.getItem(i.toString())) || [];
      storedCartItems.push(...items);
    }

    const combinedCartItems = storedCartItems.reduce((acc, item) => {
      const existingItem = acc.find((accItem) => accItem.title === item.title);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }

      return acc;
    }, []);

    setCartItems(combinedCartItems);
  }, []);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="shoppingCart">
      <h2>Shopping Cart</h2>
      <div className="shopping_list">
        {cartItems.map((item, index) => (
          <CartCard key={index} item={item} />
        ))}
      </div>
      <div className="checkout">
        <p>Subtotal: ${calculateSubtotal()}</p>
        <button onClick={BuyStuff}>Proceed to checkout</button>
      </div>
    </div>
  );
}