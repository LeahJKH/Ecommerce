import Style from "./UserMenu.module.css";
export default function UserMenu({ toggleUserMenu }) {
  return (
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
        <div className={Style.Flexify2}>
          <h2>Name</h2>
          <p>
            <span>View profile</span>
          </p>
        </div>
      </div>
      <div className={Style.Flexify3}>
        <img
          src="../../../public/icons/Settings.svg"
          alt=""
          className={Style.MenuImg}
        />
        <h3>
          <span>Settings</span>
        </h3>
      </div>
      <div className={Style.Flexify4}>
        <img
          src="../../../public/icons/Loggout.svg"
          alt=""
          className={Style.MenuImg}
        />
        <h3>
          <span>Log out</span>
        </h3>
      </div>
      <p></p>
    </div>
  );
}
