import { useState, useEffect } from "react";
import Styles from "./catagory.module.css";
import Style from "./Shop.module.css";
import { ProductCard } from "../../Components/ProductCard/ProductCard";

const categories = [
  { name: "Boats", image: "../../../public/pictures/boats.png" },
  { name: "Cars", image: "../../../public/pictures/cars.png" },
  { name: "men's clothing", image: "../../../public/pictures/clothes.png" },
  { name: "Houses", image: "../../../public/pictures/houses.png" },
  { name: "Companies", image: "../../../public/pictures/companies.png" },
  { name: "Jewelry", image: "../../../public/pictures/jewelry.png" },
];

export function Category() {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "";
  });

  const [showShop, setShowShop] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function handleCategoryChange(categoryName) {
    setSelectedCategory(categoryName);
    setShowShop(true);
    localStorage.setItem("selectedCategory", categoryName);
  }

  return (
    <div className={Styles.category}>
      <div className={Style.categoryH2}>
        <h2>Category Page</h2>
      </div>
      {showShop ? (
        <div className={Style.centering}>
          <div className={Style.cardFlex}>
            {products
              .filter(
                (product) =>
                  !selectedCategory ||
                  product.category.toLowerCase() ===
                    selectedCategory.toLowerCase()
              )
              .map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </div>
        </div>
      ) : (
        <div className={Styles.categoryContainer}>
          {categories.map((category, index) => (
            <div key={index} className={Styles.categoryCard}>
              <h3 onClick={() => handleCategoryChange(category.name)}>
                {category.name}
              </h3>
              <img
                className={Styles.cardImage}
                src={category.image}
                alt={category.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const selectedCategory = localStorage.getItem("selectedCategory") || "";
    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = selectedCategory
          ? data.filter(
              (product) =>
                product.category.toLowerCase() ===
                selectedCategory.toLowerCase()
            )
          : data;
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={Style.centering}>
      <div className={Style.cardFlex}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
