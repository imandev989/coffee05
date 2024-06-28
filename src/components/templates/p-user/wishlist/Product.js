"use client";
import styles from "./product.module.css";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import swal from "sweetalert";
const Card = ({ price, score, name, productID }) => {
  const removeProduct = () => {
    swal({
      title: "Are you sure to delete the product?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/wishlist/${productID}`, {
          method: "DELETE",
        });
        if (res.status === 200) {
          swal({
            title: "Product Deleted Successfully",
            icon: "success",
            buttons: "understand",
          }).then(() => {
            location.reload();
          });
        }
      }
    });
  };

  return (
    <div className={styles.card}>
      <Link href={"/product/123"}>
        <img
          width={283}
          height={283}
          src="/images/productItem03.png"
          alt=""
        />
      </Link>
      <p dir="rtl">{name}</p>
      <div>
        <div>
          {new Array(score).fill(0).map((item, index) => (
            <IoMdStar key={index} />
          ))}
          {new Array(5 - score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        <span>{price.toLocaleString()} $</span>
      </div>
      <button onClick={() => removeProduct()} className={styles.delete_btn}>
        Delete from Favourites{" "}
      </button>
    </div>
  );
};

export default Card;
