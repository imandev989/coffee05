import Ticket from "./Ticket";
import styles from "./tickets.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Tickets = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_details}>
        <p>Recent Tickets</p>
        <Link href="/p-user/tickets">
          All Tickets<FaArrowRight />
        </Link>
      </div>
      <Ticket />
      <Ticket />
      <Ticket />

      {/* <p className={styles.empty}>Ticket not registered</p> */}
    </div>
  );
};

export default Tickets;
