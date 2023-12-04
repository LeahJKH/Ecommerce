import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={style.aboutcontainer}>
        <div className={style.section}>
          <div className={style.section1}>
            <h1>Welcome to Desiderio!</h1>
          </div>
          <div className={style.section2}>
            <h2>Our Story</h2>
            <p>
              Founded in 1876 by fashion enthusiasts, Your Online Store has
              evolved into a global destination for those seeking the latest in
              style. Over the years, our commitment to quality and innovation
              has set us apart.
            </p>
          </div>
          <div className={style.section3}>
            <h2>Mission Statement</h2>
            <p>
              Our mission is simple yet powerful: to redefine online shopping.
              We aspire to offer high-quality, expensive fashion that empowers
              individuals to express their unique style.
            </p>
          </div>
          <div className={style.section4}>
            <h2>Values</h2>
            <p>
              At the core of our identity are values of customer satisfaction,
              transparency, and a commitment to staying at the forefront of
              fashion trends. We believe in creating a positive and inclusive
              shopping environment.
            </p>
          </div>
          <div className={style.section5}>
            <h2>Team</h2>
            <p>
              Meet the heartbeat of Desiderio - a collective of diverse talents
              and passionate individuals who breathe life into our brand. From
              visionary designers sculpting the latest trends to the friendly
              faces ensuring your seamless shopping experience, our team is
              united by a shared love for fashion and a commitment to your
              satisfaction. Together, we celebrate creativity, embrace
              innovation, and work collaboratively to bring you fashion that
              speaks to your unique style.
            </p>
          </div>
          <div className={style.section6}>
            <h2>What Sets Us Apart</h2>
            <p>
              Desiderio stands out through its carefully curated collections
              that strike the perfect balance between affordability and chic
              style. We believe that everyone deserves to look and feel their
              best.
            </p>
          </div>
          <div className={style.section7}>
            <h2>Achievements</h2>
            <p>
              We take pride in our achievements, from being recognized for our
              innovative designs to receiving accolades for our commitment to
              customer satisfaction. Your trust fuels our success.
            </p>
          </div>
          <div className={style.section8}>
            <h2>Community Impact</h2>
            <p>
              Shopping with purpose - every purchase at Desiderio contributes to
              local charities and community initiatives. We believe in using
              fashion as a force for good, making a positive impact beyond our
              storefront.
            </p>
          </div>
          <div className={style.section9}>
            <h2>Connect With Us</h2>
            <p>
              Follow us on social media for exclusive deals, behind-the-scenes
              glimpses, and to become part of the vibrant Desiderio community.
              Your journey with us has only just begun!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
