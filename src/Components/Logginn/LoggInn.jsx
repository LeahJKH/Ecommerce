import styles from'./LoggInn.module.css'

export function LoggInn() {
  return (
    
    <>
      <div className={styles.loggInn}>
      <div className={styles.loggInnContainer}>
        <h3 className={styles.singUpTitle}>Sing Up</h3>
        <form action="" className={styles.singUpForm}>
            <input type="text" name='name' className={styles.formName} id='formName' placeholder='Name' />
            <input type="email" name='email' className={styles.formEmail} id='formEmail' placeholder='Email' />
            <input type="password" name='password' className={styles.formPassword} id='formPassword' placeholder='Password'/>
          <button type='submit' className={styles.formSingUpButton} id='formSingUpButton'>Sing Up</button>
        </form>
        <p className={styles.singInText}>Already have an account? <a href="#">Sign in</a></p>
      </div>
      </div>
    </>
  );
}
