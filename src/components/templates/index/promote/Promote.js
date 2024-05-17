import Link from "next/link";
import styles from "./promote.module.css";

const Promote = () => {
  return (
    <div className={styles.readable}>
      <div data-aos="fade-up-right" className={styles.container}>
        <main className={styles.main}>
          <section className={styles.club}>
            <div>
              <span>It is a customer club</span>
              <p>It is coffee for loyal customers</p>
            </div>
          </section>
          <section>
            <span>Buying coffee, in the style of professionals</span>
            <p>"Set" today's beauty with coffee</p>
            <img data-aos="fade-left" src="/images/coffee-image-1.jpg" alt="" />
          </section>
        </main>
        <main className={styles.main}>
          <img width={660} height={530} src="/images/Home32.jpg" alt="" />
          <section data-aos="fade-up" className={styles.why_coffee}>
            <img
              className={styles.logo}
              src="/images/coffee-svg-2.svg"
              alt=""
            />
            <p className={styles.title}>Why is it coffee?</p>
            <p>
              Having sufficient experience and age and knowing the taste of
              consumers is our guide in meeting the needs of specialty coffee
              customers (third wave). Four generations of experience and
              continuous communication with coffee consumers guarantee these
              features.
            </p>
            <div>
              <Link href="/about-us">
                <button className={styles.red_btn}>Read More </button>
              </Link>
              <Link href="/category">
                <button>Store</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Promote;
