import Link from "next/link";
import styles from "./ticket.module.css";

const Ticket = ({ _id, title, createdAt, department, hasAnswer }) => {
  return (
    <Link href={`/p-user/tickets/answer/${_id}`} className={styles.ticket}>
      <div>
        <p>{title}</p>
        <p className={styles.department}>{department.title}</p>
      </div>
      <div>
        <p>{new Date(createdAt).toLocaleDateString()}</p>
        <p className={hasAnswer ? styles.answer : styles.no_answer}>
          {hasAnswer ? "Response" : "Not Response"}
        </p>
        {/* answer */}
      </div>
    </Link>
  );
};

export default Ticket;
