"use client";
import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helpers";
import swal from "sweetalert";
export default function DataTable({ comments, title }) {
  const router = useRouter();

  const showCommentBody = (body) => {
    showSwal(body, undefined, "Understand");
  };
  const acceptComment = async (commentID) => {
    const res = await fetch("/api/comments/accept", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: commentID }),
    });

    if (res.status === 200) {
      swal({
        title: "Comment Accepted Successfully",
        icon: "success",
        buttons: "understood",
      }).then(() => {
        router.refresh();
      });
    }
  };

  const rejectComment = async (commentID) => {
    const res = await fetch("/api/comments/reject", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: commentID }),
    });

    if (res.status === 200) {
      swal({
        title: "Comment Rejected Successfully",
        icon: "success",
        buttons: "understood",
      }).then(() => {
        router.refresh();
      });
    }
  };

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span style={{textAlign:"left"}}>{title}</span>
        </h1>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Score</th>
              <th>Product</th>
              <th>Submit Date</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Accept/Reject</th>
              <th>Response</th>
              <th>Ban</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment, index) => (
              <tr key={comment._id}>
                <td
                  className={comment.isAccept ? styles.accept : styles.reject}
                >
                  {index + 1}
                </td>
                <td>{comment.username}</td>
                <td>{comment.email}</td>
                <td>{comment.score}</td>
                <td>{comment.productID.name}</td>
                <td>{new Date(comment.date).toLocaleDateString()}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => showCommentBody(comment.body)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    Edit
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    Delete
                  </button>
                </td>
                <td>
                  {comment.isAccept ? (
                    <button
                      type="button"
                      className={styles.delete_btn}
                      onClick={() => rejectComment(comment._id)}
                    >
                      {" "}
                      Reject{" "}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className={styles.delete_btn}
                      onClick={() => acceptComment(comment._id)}
                    >
                      {" "}
                      Accept{" "}
                    </button>
                  )}
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    Response
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    Ban
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
