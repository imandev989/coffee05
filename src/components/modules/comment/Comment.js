import { FaStar } from "react-icons/fa";

import styles from "./comment.module.css";
const Comment = () => {
  return (
    <section className={styles.comment}>
      <img src="/images/shahin.jpg" className={styles.avatar} alt="" />
      <div>
        <div className={styles.main_details}>
          <div className={styles.user_info}>
            <strong>shahin</strong>
            <p>27 April 2023</p>
          </div>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p>
          The coffee is very fragrant and tasty... I wish the models of the
          capsules would be more diverse do.
        </p>
      </div>
    </section>
  );
};

export default Comment;
