import Styles from "./ProductCard.module.css";

export function ProductCard({ product }) {
  return (
    <div className={Styles.cardProduct}>
      <div className={Styles.CardContent}>
        <img src={product.image} alt={product.title} className={Styles.productImg} />
        <div className={Styles.containProduct}>
          <p>{product.title}</p>
          <p>{product.price}$</p>
          <p className={Styles.descStyles}>{product.description}</p>
          <p>Quantity: + 0 -</p>
          <button className={Styles.productBtn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
