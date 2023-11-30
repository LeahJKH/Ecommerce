import styles from "./footer.module.css";

export function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <h1 className={styles.footerTitle}>DD</h1>
        <p>DesDerio</p>
        <h5>Sign up too newsletter</h5>
        <input type="text" name="email-footer" id="email-Footer" />
        <button>Subscribe</button>
        <h5>Customer-service</h5>
        <h5>Want premium membership?</h5>
        <p>2024 Desiderio Copyright</p>
        <img src="" alt="Twitter" />
        <img src="" alt="Instagram" />
        <img src="" alt="Facebook" />
        <img src="" alt="Pintrest" />
      </div>
    </>
  );
}
