import { useState, useEffect } from "react";
import "./Catagory.css";

import { ProductCard } from "../../Components/ProductCard/ProductCard";

const categories = [
  { name: "Boats", image: "../../../public/pictures/boats.png" },
  { name: "Cars", image: "../../../public/pictures/cars.png" },
  { name: "men's clothing", image: "../../../public/pictures/clothes.png" },
  { name: "Houses", image: "../../../public/pictures/houses.png" },
  { name: "Companies", image: "../../../public/pictures/companies.png" },
  { name: "Jewelry", image: "../../../public/pictures/jewelry.png" },
  { name: "Family", image: "../../../public/pictures/Family.jpg" },
];


export function Category() {
  function returnPage() {
    location.reload()
  }
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "";
  });

  const [showShop, setShowShop] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:49999/products"; //if you dont have our local host you cant see the cart in action

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
    <div className="category">
      <div className="categoryH2">
        <h2>Category Page</h2>
      </div>
      {showShop ? (
       <div>
       <button onClick={returnPage} className="btnReturn">RETURN</button>
       <div className="centering">
        <div className="cardFlex">
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
        </div>
      ) : (
        <div className="categoryContainer">
          {categories.map((category, index) => (
            <div key={index} className="categoryCard">
              <h3 onClick={() => handleCategoryChange(category.name)}>
                {category.name}
              </h3>
              <img
                className="cardImage"
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
