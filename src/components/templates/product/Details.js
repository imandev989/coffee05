import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";

const Details = () => {
  return (
    <main style={{ width: "63%" }}>
      <Breadcrumb
        title={
          "SETpresso coffee capsules compatible with Nespresso machine (GOLD) 10-10 pieces"
        }
      />
      <h2>
        SETpresso coffee capsules compatible with Nespresso machine (GOLD) 10-10
        pieces{" "}
      </h2>

      <div className={styles.rating}>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>(Opinion of 7 users)</p>
      </div>

      <p className={styles.price}>205,000 Dollar</p>
      <span className={styles.description}>
        Gold model coffee capsule set is compatible with Nespresso capsule
        machines. Composition This is Arabica coffee with a medium roast and
        some acidity along with tone Medium variegated, and it is excellent to
        combine with milk.
      </span>

      <hr />

      <div className={styles.Available}>
        <IoCheckmark />
        <p>Available in stock</p>
      </div>

      <div className={styles.cart}>
        <button>Add to cart</button>
        <div>
          <span>-</span>1<span>+</span>
        </div>
      </div>

      <section className={styles.wishlist}>
        <div>
          <CiHeart />
          <a href="/">Add to favorites</a>
        </div>
        <div>
          <TbSwitch3 />
          <a href="/">Compare</a>
        </div>
      </section>

      <hr />

      <div className={styles.details}>
        <strong>Product ID: GOLD Nespresso Compatible capsule</strong>
        <p>
          {" "}
          <strong>Category:</strong> Coffee Capsule, Coffee capsules, all items
        </p>
        <p>
          <strong>Tag:</strong> Coffee capsules, Perso set coffee capsules, coffee capsules
           Iranian, Iranian Nespresso coffee capsules, coffee set, Setpresso, Gold Setpresso
        </p>
      </div>

      <div className={styles.share}>
        <p>share: </p>
        <a href="/">
          <FaTelegram />
        </a>
        <a href="/">
          <FaLinkedinIn />
        </a>
        <a href="/">
          <FaPinterest />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaFacebookF />
        </a>
      </div>

      <hr />
    </main>
  );
};

export default Details;
