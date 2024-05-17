import Link from "next/link";
import styles from "./product.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.details_container}>
        <img
          src="https://set-coffee.com/wp-content/uploads/2021/10/041-430x430.png"
          alt=""
        />
        <div className={styles.icons}>
          <Link href="/">
            <CiSearch />
            <p className={styles.tooltip}>Fast View </p>
          </Link>
          <div>
            <CiHeart />
            <p className={styles.tooltip}> Add To Favourites</p>
          </div>
        </div>
        <button> Add To Basket</button>
      </div>

      <div className={styles.details}>
        <Link href={"/"}>
        KuruKahveci Mehmet Efendi Decaf Turkish Coffee, 50g – 1.76oz

        </Link>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <span>$5.40</span>
      </div>
    </div>
  );
};

export default Card;
