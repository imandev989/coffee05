import Link from "next/link";
import styles from "./ticket.module.css";

const Ticket = () => {
  return (
    <Link href={`/p-user/tickets/answer/2323`} className={styles.ticket}>
      
      <div>
        <p>Sunday 26 May 2024</p>
        <p className={styles.no_answer}>Not answered</p>
        {/* answer */}
      </div>
      <div>
        <p>Packaging volume</p>
        <p className={styles.department}>support unit</p>
      </div>
    </Link>
  );
};

export default Ticket;
