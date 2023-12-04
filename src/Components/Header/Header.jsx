import styles from "./Header.module.css";
import UserMenu from "../Usermenu/UserMenu";
import Hamburger from "../HamburgerMenu/Hamburger";
import { useState } from "react";

export function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const toggleShowMoreUser = () => {
    setShowUserMenu(!showUserMenu);
    if (showBurgerMenu) {
      setShowBurgerMenu(false);
    }
  };

  const toggleShowMoreBurger = () => {
    setShowBurgerMenu(!showBurgerMenu);
    if (showUserMenu) {
      setShowUserMenu(false);
    }
  };
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.userCart}>
          <img src="./icons/person.svg" alt="User Icon" onClick={toggleShowMoreUser} />
          <img src="../../icons/basket.svg" alt="Shopping cart" />
        </div>
        <div className={styles.logo}>
          <h1>DD</h1>
          <p>DesiDerio</p>
        </div>
        <div className={styles.searchHam}>
          <img src="../../icons/search.svg" alt="Magnifying glass" />
          <img
            src="../../../public/icons/Hamburgermenu.svg"
            alt=""
            onClick={toggleShowMoreBurger}
          />
        </div>
      </div>
      {showUserMenu && <UserMenu toggleUserMenu={toggleShowMoreUser} />}
      {showBurgerMenu && <Hamburger toggleBurgerMenu={toggleShowMoreBurger} />}
    </>
  );
}
/* <ul className={styles.pagesList}>
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
        </ul> */
