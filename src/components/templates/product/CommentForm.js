import { IoMdStar } from "react-icons/io";
import styles from "./commentForm.module.css";
import { useState,useEffect } from "react";
import { showSwal } from "@/utils/helpers";
const CommentForm = ({ productID }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState(5);
  const [isSaveUserInfo, setIsSaveUserInfo] = useState(false);

  const setCommentScore = (score) => {
    setScore(score);
    showSwal("Your Score Submited Successfully", "success", "Continue");
  };
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUsername(userInfo?.username);
    setEmail(userInfo?.email);
  }, []);

  const submitComment = async () => {
    // Validation (You)

    if (isSaveUserInfo) {
      const userInfo = {
        username,
        email,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    const comment = { username, email, body, score, productID };
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "appliaction/json",
      },
      body: JSON.stringify(comment),
    });
    console.log("RESPONSE -->>", res);
    if (res.status === 201) {
      showSwal("comment saved", "success", "ok");
    }
  };

  return (
    <div className={styles.form}>
      <p className={styles.title}>Write your opinion</p>
      <p>
        Your email address will not be published. Required sections are marked{" "}
        <span style={{ color: "red" }}>*</span>
      </p>
      <div className={styles.rate}>
        <div>
          <IoMdStar onClick={() => setCommentScore(5)} />
          <IoMdStar onClick={() => setCommentScore(4)} />
          <IoMdStar onClick={() => setCommentScore(3)} />
          <IoMdStar onClick={() => setCommentScore(2)} />
          <IoMdStar onClick={() => setCommentScore(1)} />
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
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
      </div>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label htmlFor="">
            <span style={{ color: "red" }}> * </span>
            Name
          </label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="">
            <span style={{ color: "red" }}> * </span>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          value={isSaveUserInfo}
          onChange={(event) => setIsSaveUserInfo((prevValue) => !prevValue)}
        />
        <p>
          {" "}
          Save my name, email and website in the browser for when you visit
          again I write.
        </p>
      </div>
      <button onClick={submitComment}>Submit</button>
    </div>
  );
};

export default CommentForm;
