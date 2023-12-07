import styles from "./Header.module.css";
import { useState, useEffect } from "react";

export function Header() {
  const [itemsSaved, setItemsSaved] = useState(0);

 useEffect(() => {
  let totalQuantity = 0;

  for (let i = 0; i < 30; i++) {
    const cartItems = JSON.parse(localStorage.getItem(i)) || [];
    
    if (Array.isArray(cartItems)) {
      totalQuantity += cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
    }
  }

  setItemsSaved(totalQuantity);
}, []);

  function LinkHandle() {
    location.href="/ShoppingCart"
  } 
function GoHome() {
  location.href="/"
}
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
          <img src="./icons/person.svg" alt="User Icon" onClick={toggleShowMoreUser} className={styles.cursorClicking} />
          <img src="./icons/basket.svg" alt="Shopping cart" onClick={LinkHandle}  className={styles.cursorClicking}/>
          <p>{itemsSaved}</p>
        </div>
        <div className={styles.logo} >
          <h1 onClick={GoHome} className={styles.cursorClicking}>DD</h1>
          <p className={styles.cursorClicking} onClick={GoHome}>DesiDerio</p>
        </div>
        <div className={styles.searchHam}>
          <img src="./icons/search.svg" alt="Magnifying glass" />
          <img
            src="./icons/Hamburgermenu.svg"
            alt=""
            onClick={toggleShowMoreBurger}
            className={styles.cursorClicking}
          />
        </div>
      </div>
      {showUserMenu && <UserMenu toggleUserMenu={toggleShowMoreUser} />}
      {showBurgerMenu && <Hamburger toggleBurgerMenu={toggleShowMoreBurger} />}
    </>
  );
}