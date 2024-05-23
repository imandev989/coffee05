import Comment from "@/components/modules/comment/Comment";
import styles from "./comments.module.css";
import CommentForm from "./CommentForm";

const Comments = ({ comments }) => {
  return (
    <div>
      <p>Comments (7) :</p>
      <hr />

      <main className={styles.comments}>
        <div className={styles.user_comments}>
          <p className={styles.title}>
          7 comments for SETPRESSO coffee capsule compatible with Nespresso machine (GOLD)
             Ten - 10 - numbers
          </p>
          <div>
            {/* {comments.map((comment) => (
              <Comment key={comment._id} {...comment} />
            ))} */}
          </div>
        </div>
        <div className={styles.form_bg}>
          <CommentForm />
        </div>
      </main>
    </div>
  );
};

export default Comments;
