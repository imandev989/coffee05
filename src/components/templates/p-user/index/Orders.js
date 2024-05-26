import Link from "next/link";
import Order from "./Order";
import styles from "./orders.module.css";
import { FaArrowRight } from "react-icons/fa6";

const Orders = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_details}>
        <p>Recent Orders</p>
        <Link href="/p-user/orders">
          All Orders <FaArrowRight />
        </Link>
      </div>
      {/* <Order />
      <Order />
      <Order /> */}

      <p className={styles.empty}>Order not registered</p>
    </div>
  );
};

export default Orders;
