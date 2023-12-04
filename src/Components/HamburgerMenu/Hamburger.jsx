import Style from "./Hamburger.module.css";
export default function Hamburger({ toggleBurgerMenu }) {
  return (
    <>
      <div>
        <h1 className={Style.CrossOut} onClick={toggleBurgerMenu}>
          X
        </h1>
        <div className={Style.WrapCatagories}>
          <p>Cars</p>
          <p>Boats</p>
          <p>House</p>
          <p>Clothes</p>
          <p>Family</p>
          <p>Jewelry</p>
        </div>
        <div className={Style.rowThemMenu}>
          <div>
            <p>About</p>
            <p>Contact</p>
          </div>
          <img src="../../../public/icons/Loggout.svg" alt="" className={Style.MenuImg} />
        </div>
      </div>
    </>
  );
}
