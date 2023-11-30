import Styles from "./Shop.module.css";
import { useEffect, useState } from "react";
import { ProductCard } from "../../Components/ProductCard/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={Styles.centering}>
      <div>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
