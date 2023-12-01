import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.userCart}>
          <img src="./icons/person.svg" alt="User Icon" />
          <img src="../../icons/basket.svg" alt="Shopping cart" />
        </div>
        <div className={styles.logo}>
          <h1>DD</h1>
          <p>DesiDerio</p>
        </div>
        <div className={styles.searchHam}>
          <img src="../../icons/search.svg" alt="Magnifying glass" />
          <img src="../../icons/Hamburgermenu.svg" alt="Hamburger" />
        </div>
        {/* <ul className={styles.pagesList}>
          <li>
            <Link to="/" className="pages">
              Home
            </Link>
          </li>
          <li>
            <Link to="/user" className="pages">
              User
            </Link>
          </li>
          <li>
            <Link to="/contact" className="pages">
              {" "}
              Contact
            </Link>
          </li>
          <li>
            <Link to="/shop" className="pages">
              {" "}
              Shop
            </Link>
          </li>
          <li>
            <Link to="/ShoppingCart" className="pages">
              {" "}
              ShoppingCart
            </Link>
          </li>
          <li>
            <Link to="/Settings" className="pages">
              {" "}
              Settings
            </Link>
          </li>
        </ul> */}
      </div>
    </>
  );
}
