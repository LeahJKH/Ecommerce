import styles from "./footer.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerTitle}>
          <h1>DD</h1>
          <p>DesiDerio</p>
        </div>
        <div className={styles.newsletter}>
          <h5>Sign up for newsletter</h5>
          <input type="text" name="email-footer" id="email-Footer" />
          <button>Subscribe</button>
        </div>
        <h5>Customer-service</h5>
        <h5>Want premium membership?</h5>
        <p className={styles.copyright}>2024 Desiderio Copyright</p>
        <img src="../../../public/icons/twitter.svg" alt="Twitter" />
        <img src="../../../public/icons/instagram.svg" alt="Instagram" />
        <img src="../../../public/icons/facebook.svg" alt="Facebook" />
        <img src="../../../public/icons/pinterest.svg" alt="Pinterest" />
      </div>
    </>
  );
}
