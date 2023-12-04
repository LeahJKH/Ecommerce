import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = categoryName
          ? data.filter((product) => product.category.toLowerCase() === categoryName.toLowerCase())
          : data;
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [categoryName]);

  return (
    <div>
      <h2>{categoryName ? categoryName : "All Products"}</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            {/* Display other product information */}
          </div>
        ))}
      </div>
    </div>
  );
}
