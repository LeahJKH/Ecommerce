import style from "./Contact.module.css";
export function Contact() {
  return (
    <>
      <div className={style.contactPagecontainer}>
        <div className={style.headertext}>
          <h1>Contact the creators of Desiderio</h1>
          <p>
            We have the <span>worlds best customer service. </span>Subscribe to
            our premium membership, and we will respond within 5 minutes. Feel
            free to contact us by filling out the contact form below:
          </p>
        </div>
        <div className={style.contactformcontainer}>
          <form className={style.contactform}>
            <label className={style.formlabel} htmlFor="name">
              Name:
            </label>
            <input
              className={style.forminput}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              className={style.forminput}
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Your message:</label>
            <textarea
              className={style.formtextarea}
              id="message"
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button className={style.sendbutton} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
