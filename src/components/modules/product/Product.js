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
            <p className={styles.tooltip}>Quick View</p>
          </Link>
          <div>
            <CiHeart />
            <p className={styles.tooltip}>Add To Favorites </p>
          </div>
        </div>
        <button>Add To Basket</button>
      </div>

      <div className={styles.details}>
        <Link href={"/"}>
          SETpresso coffee capsules compatible with Nespresso machine (RED) 10
          pieces LIMITED EDITION
        </Link>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <span>825,000 Dollar</span>
      </div>
    </div>
  );
};

export default Card;
