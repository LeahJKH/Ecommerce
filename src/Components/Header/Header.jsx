import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <div className={styles.headerContainer}>
        <h1>DD</h1>
        <p>DesDerio</p>
        <img src="" alt="User Icon" />
        <img src="" alt="Shopping cart" />
        <img src="" alt="Magnifying glass" />
        <img src="" alt="Hamburger" />

        <ul className={styles.pagesList}>
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
        </ul>
      </div>
    </>
  );
}
