import Style from "./Hamburger.module.css";
import { Link } from "react-router-dom";
export default function Hamburger({ toggleBurgerMenu }) {

  return (
    <>
      <div className={Style.Background}>
        <div className={Style.WrapCatagories}>
          <div className={Style.homecat}>
            <Link to="/Catagories">Categories</Link>
            <Link to="/">Home</Link>
          </div>
          <div className={Style.rowThemMenu}>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className={Style.logoutxicon}>
          <h1 className={Style.CrossOut} onClick={toggleBurgerMenu}>
            X
          </h1>
          <img
            src="./icons/Loggout.svg"
            alt="Logout-icon"
            className={Style.MenuImg}
          />
        </div>
      </div>
    </>
  );
}
