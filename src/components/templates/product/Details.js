import { FaFacebookF, FaStar, FaTwitter, FaRegStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";
import AddToWishlist from "./AddToWishlist";

// ❌ async
const Details = ({ product }) => {
  console.log("MY PRODUCT -->", product._id);
  return (
    <main style={{ width: "63%" }}>
      <Breadcrumb title={product.name} />
      <h2>{product.name}</h2>

      <div className={styles.rating}>
        <div>
          {new Array(product.score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}

          {new Array(5 - product.score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <p>(View {product.comments.length} User)</p>
      </div>

      <p className={styles.price}>{product.price.toLocaleString()} تومان</p>
      <span className={styles.description}>{product.shortDescription}</span>

      <hr />

      <div className={styles.Available}>
        <IoCheckmark />
        <p>Available in Store</p>
      </div>

      <div className={styles.cart}>
        <button>Add To Basket</button>
        <div>
          <span>-</span>1<span>+</span>
        </div>
      </div>

      <section className={styles.wishlist}>
        <AddToWishlist productID={product._id} />
        <div>
          <TbSwitch3 />
          <a href="/">Compare</a>
        </div>
      </section>

      <hr />

      <div className={styles.details}>
        <strong>Product ID: {product._id}</strong>

        <p>
          <strong>Tags:</strong>
          {product.tags.join(" ,")}
        </p>
      </div>

      <div className={styles.share}>
        <p>Share: </p>
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
