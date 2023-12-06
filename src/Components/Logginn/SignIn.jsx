import styles from "./LoggInn.module.css";

export function signIn() {
  return (
    <>
      <div className={styles.loggInn}>
        <div className={styles.loggInnContainer}>
          <h3 className={styles.loggInnTitle}>Login</h3>
          <form action="" className={styles.loggInnForm}>
            <input
              type="email"
              name="email"
              className={styles.formEmail}
              id="formEmail"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              className={styles.formPassword}
              id="formPassword"
              placeholder="Password"
            />
            <button type="submit" className={styles.formButton} id="formsignUpButton">
              sign In
            </button>
          </form>
          <p className={styles.bottomText}>
            Dont have a account?<a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}
