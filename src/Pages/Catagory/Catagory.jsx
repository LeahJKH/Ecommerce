import React from "react";
import Style from "./Catagory.module.css";

const categories = [
  { name: "Boats", image: "../../../public/pictures/boats.png" },
  { name: "Cars", image: "../../../public/pictures/cars.png" },
  { name: "Clothes", image: "../../../public/pictures/clothes.png" },
  { name: "Houses", image: "../../../public/pictures/houses.png" },
  { name: "Companies", image: "../../../public/pictures/companies.png" },
  { name: "Jewelry", image: "../../../public/pictures/jewelry.png" },
];

export function Category() {
  return (
    <div className={Style.category}>
      <h2>Category Page</h2>
      <div className={Style.categoryContainer}>
        {categories.map((category, index) => (
          <div key={index} className={Style.categoryCard}>
            <h3>{category.name}</h3>
            <img
              className={Style.cardImage}
              src={category.image}
              alt={category.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
