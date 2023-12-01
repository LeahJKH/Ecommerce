import Style from "./UserMenu.module.css";
export default function UserMenu() {
  return (
    <>
      <div>
        <h1 className={Style.CrossOut}>X</h1>
        <img src="../../../public/icons/person.svg" alt="User icon" />
        <h6>Name</h6>
        <p>View profile</p>
        <img src="../../../public/icons/Settings.svg" alt="" />
        <h6>Settings</h6>
        <img src="../../../public/icons/Loggout.svg" alt="" />
        <p>Log out</p>
        <p></p>
      </div>
    </>
  );
}
