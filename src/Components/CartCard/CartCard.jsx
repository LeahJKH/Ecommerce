import { useState } from "react";
import Style from "./CartCard.module.css";
import "../../Pages/ShoppingCart/Shopping.css";

export default function CartCard({ item }) {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const updateLocalStorage = (newQuantity) => {
    const existingCartItems = JSON.parse(localStorage.getItem(item.id)) || [];
    const existingItemIndex = existingCartItems.findIndex((cartItem) => cartItem.title === item.title);

    if (existingItemIndex !== -1) {
      // Update the quantity in local storage
      existingCartItems[existingItemIndex].quantity = newQuantity;
    }

    // Update local storage with the modified cart items
    localStorage.setItem(item.id, JSON.stringify(existingCartItems));
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateLocalStorage(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateLocalStorage(newQuantity);
    }
  };

  return (
    <div className={Style.list_item}>
      <img src={item.image} alt={item.title} className={Style.ImagesProducts} />
      <div className={Style.item_info}>
        <p>{item.title}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className={Style.item_increment}>
        <button onClick={handleIncrement}>+</button>
        <p>{quantity}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}