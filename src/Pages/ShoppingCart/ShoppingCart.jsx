import { useState } from "react";
import "./Shopping.css";

export default function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="shoppingCart">
      <h2>Shopping Cart</h2>
      <div className="shopping_list">
        <div className="list_item">
          <img src="../../../public/pictures/boats.png" alt="boat" />
          <div className="item_info">
            <p>Item</p>
            <p>Price</p>
          </div>
          <div className="item_increment">
            <button onClick={handleIncrement}>+</button>
            <p>{quantity}</p>
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>
      </div>
      <div className="checkout">
        <p>Subtotal: $654</p>
        <button>Procced to checkout</button>
      </div>
    </div>
  );
}
