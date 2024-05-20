import { IoMdStar } from "react-icons/io";
import styles from "./commentForm.module.css";
const CommentForm = () => {
  return (
    <div className={styles.form}>
      <p className={styles.title}>Write your opinion</p>
      <p>
        Your email address will not be published. Required sections are marked{" "}
        <span style={{ color: "red" }}>*</span>
      </p>
      <div className={styles.rate}>
       
        <div>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <p>: Your Score</p>
      </div>
      <div className={styles.group}>
        <label htmlFor="">
        <span style={{ color: "red" }}> * </span>your point of view
        </label>
        <textarea
          id="comment"
          name="comment"
          cols="45"
          rows="8"
          required=""
          placeholder=""
        ></textarea>
      </div>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label htmlFor="">
          <span style={{ color: "red" }}> * </span>

            Name
          </label>
          <input type="text" />
        </div>
        <div className={styles.group}>
          <label htmlFor="">
             <span style={{ color: "red" }}> * </span>
            Email
           
          </label>
          <input type="email" />
        </div>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id="" />
        <p>
          {" "}
          Save my name, email and website in the browser for when you visit
          again I write.
        </p>
      </div>
      <button>Submit</button>
    </div>
  );
};

export default CommentForm;
