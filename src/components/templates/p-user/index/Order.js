import Link from "next/link";
import styles from "./order.module.css";

const Order = () => {
  return (
    <Link href={`/product/123`} className={styles.card}>
      <div>
        <div>
          <p>Arabika Coffe 40%</p>
          <img
            src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
            alt=""
          />
        </div>
        <p> Completed</p>
      </div>
      <div>
        <p>8:00 13/10/1989</p>
        <p className={styles.price}>200000  $</p>
      </div>
    </Link>
  );
};

export default Order;
