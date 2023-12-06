import Styles from "./ProductCard.module.css";

export function ProductCard({ product }) {
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  function Save() {
    const existingProductIndex = existingCartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      existingCartItems[existingProductIndex].quantity += 1;
    } else {
      existingCartItems.push({ title: product.title, price: product.price, quantity: 1, image: product.image });
    }
    localStorage.setItem(product.id, JSON.stringify(existingCartItems));
  }
  return (
    <div className={Styles.cardProduct}>
      <div className={Styles.CardContent}>
        <img src={product.image} alt={product.title} className={Styles.productImg} />
        <div className={Styles.containProduct}>
          <p>{product.title}</p>
          <p>{product.price}$</p>
          <p className={Styles.descStyles}>{product.description}</p>
          <p>Quantity: + 0 -</p>
          <button className={Styles.productBtn} onClick={Save}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
