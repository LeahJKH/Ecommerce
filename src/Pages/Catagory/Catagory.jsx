import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Catagory.module.css";
import Shop from "../Shop/Shop";

const categories = [
  { name: "Boats", image: "../../../public/pictures/boats.png" },
  { name: "Cars", image: "../../../public/pictures/cars.png" },
  { name: "Clothes", image: "../../../public/pictures/clothes.png" },
  { name: "Houses", image: "../../../public/pictures/houses.png" },
  { name: "Companies", image: "../../../public/pictures/companies.png" },
  { name: "Jewelry", image: "../../../public/pictures/jewelry.png" },
];

export function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };

  return (
    <div className={Style.category}>
      <h2>Category Page</h2>
      <div className={Style.categoryContainer}>
        {categories.map((category, index) => (
          <div className={Style.categoryCard} key={index}>
            <h3>{category.name}</h3>
            <img className={Style.cardImage} src={category.image} alt={category.name} />

            {/* Pass selectedCategory to Shop component */}
            <Link to={`/shop/${category.name}`} onClick={() => handleCategoryClick(category)}>
              View Products
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
