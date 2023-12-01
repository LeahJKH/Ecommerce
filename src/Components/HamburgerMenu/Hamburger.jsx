import Style from "./Hamburger.module.css";
export default function Hamburger() {
  return (
    <>
      <div>
        <h1 className={Style.CrossOut}>X</h1>
        <div>
          <p>Cars</p>
          <p>Boats</p>
          <p>House</p>
          <p>Clothes</p>
          <p>Family</p>
          <p>Jewelry</p>
        </div>
        <div>
          <p>About</p>
          <p>Contact</p>
        </div>
        <img src="../../../public/icons/Loggout.svg" alt="" />
      </div>
    </>
  );
}
