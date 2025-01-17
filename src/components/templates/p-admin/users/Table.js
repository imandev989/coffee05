"use client";
import React from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function DataTable({ users, title }) {
  const router = useRouter();

  const changeRole = async (userID) => {
    // Validation (You)

    const res = await fetch("/api/user/role", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userID }),
    });
    if (res.status === 200) {
      swal({
        title: "User Role Changed",
        icon: "success",
        buttons: "Understood",
      }).then(() => {
        router.refresh();
      });
    }
  };

  const removeUser = async (userID) => {
    // Confirm ✅
    // Validation (You) ✅

    swal({
      title: "Are you sure to delete the user ?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/user", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userID }),
        });

        if (res.status === 200) {
          swal({
            title: "The desired user has been successfully deleted",
            icon: "success",
            buttons: "Understood",
          }).then(() => {
            router.refresh();
          });
        }
      }
    });
  };

  const banUser = async (email, phone) => {
    // Confirm ✅
    // Validation (You) ✅

    swal({
      title: "Are you sure about the user ban?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/user/ban", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, phone }),
        });

        if (res.status === 200) {
          swal({
            title: "The target user has been successfully banned",
            icon: "success",
            buttons: "Understood",
          }).then(() => {
            router.refresh();
          });
        }
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name and Family</th>
              <th>Email</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Change Level</th>
              <th>Delete</th>
              <th>Block</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email ? user.email : "Email Not Found"}</td>
                <td>{user.role === "USER" ? "Simple User" : "Manager"}</td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => changeRole(user._id)}
                  >
                    Change Role
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeUser(user._id)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => banUser(user.email, user.phone)}
                    className={styles.delete_btn}
                  >
                    {" "}
                    Block
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
