import { useState } from "react";
import Style from "./CartCard.module.css"
import "../../Pages/ShoppingCart/Shopping.css";

export default function CartCard({ item }) {
  console.log("Item in CartCard:", item);

  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
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