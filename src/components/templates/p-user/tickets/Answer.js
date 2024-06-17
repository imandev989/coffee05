import styles from "./answer.module.css";

const Answer = ({ type, title, body, createdAt, user }) => {
  console.log(type, title);
  return (
    <section
      className={type == "user" ? styles.userTicket : styles.adminticket}
    >
      <div className={styles.ticket_main}>
        <p>{new Date(createdAt).toLocaleDateString()} </p>
        <div>
          <div>
            <p>{user.name}</p>
            <span>User</span>
          </div>
          <img src="/images/Iman.jpeg" alt="" />
        </div>
      </div>
      <div className={styles.ticket_text}>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Answer;
