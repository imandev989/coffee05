import Link from "next/link";
import styles from "./product.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";

const Card = ({ name, price, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.details_container}>
        <img
          src={
            img ||
            "/images/productItem.png"
          }
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
        <Link href={"/"}>{name}</Link>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <span>{price?.toLocaleString()} $</span>
      </div>
    </div>
  );
};

export default Card;



