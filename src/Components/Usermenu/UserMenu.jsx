import Style from "./UserMenu.module.css";
export default function UserMenu({ toggleUserMenu }) {
  return (
    <>
      <div className={Style.Flexify}>
        <h1 className={Style.CrossOut} onClick={toggleUserMenu}>
          X
        </h1>
        <div>
          <img
            src="../../../public/icons/personBlack.svg"
            alt="User icon"
            className={Style.UserImg}
          />
          <div className={Style.Flexify}>
            <h2>Name</h2>
            <p>View profile</p>
          </div>
        </div>
        <div>
          <img src="../../../public/icons/Settings.svg" alt="" className={Style.MenuImg} />
          <h3>Settings</h3>
        </div>
        <div>
          <img src="../../../public/icons/Loggout.svg" alt="" className={Style.MenuImg} />
          <h3>Log out</h3>
        </div>
        <p></p>
      </div>
    </>
  );
}
