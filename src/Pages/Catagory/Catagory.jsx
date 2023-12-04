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
  const [Changed, noChange] = useState("");
  function HandleCatagoryChange() {}
  const apiUrl = "https://fakestoreapi.com/products";
  (categories.name || apiUrl.category).toLowerCase().includes(Changed);
  return (
    <div className={Style.category}>
      <h2>Category Page</h2>
      <div className={Style.categoryContainer}>
        {categories.map((category, index) => (
          <div key={index} className={Style.categoryCard}>
            <h3 onClick={HandleCatagoryChange}>{category.name}</h3>
            <img className={Style.cardImage} src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
