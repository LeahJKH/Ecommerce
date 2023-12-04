import "./Shopping.css"

export default function ShoppingCart() {
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
            <button>+</button>
            <p>1</p>
            <button>-</button>
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
