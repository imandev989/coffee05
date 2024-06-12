"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/p-user/sendTicket.module.css";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

function sentTicket() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [department, setDepartment] = useState([]);
  const [subDepartment, setSubDepartment] = useState([]);
  const [priority, setPriority] = useState(1);

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/departments");
      const data = await res.json();
      setDepartment([...data]);
    };

    getDepartments();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span>Send New Ticket</span>
        <Link href="/p-user/tickets"> All Tickets</Link>
      </h1>

      <div className={styles.content}>
        <div className={styles.group}>
          <label>Please Select Department:</label>
          <select>
            <option value={-1}>Please Select Department:</option>

            {department.map((department) => (
              <option value={department.title}>{department.title}</option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          <label>Please Select Type Of Ticket:</label>
          <select>
            <option>Please Select One Item:</option>

            <option value={"Support"}>Support </option>
          </select>
        </div>
        <div className={styles.group}>
          <label>Plese Select Title of Ticket</label>
          <input placeholder="Title..." type="text" />
        </div>
        <div className={styles.group}>
          <label>Plese Select Priority Level:</label>
          <select>
            <option>Please Select One Item:</option>
            <option value="3">Low</option>
            <option value="2">Mid</option>
            <option value="1">High</option>
          </select>
        </div>
      </div>
      <div className={styles.group}>
        <label>Please Enter Contetnt Of Ticket</label>
        <textarea rows={10}></textarea>
      </div>
      <div className={styles.uploader}>
        <span>Maximum Size: 6 MegaByte</span>
        <span>Valid Formats: jpg, png.jpeg, rar, zip</span>
        <input type="file" />
      </div>

      <button className={styles.btn}>
        <IoIosSend />
        Send Ticket
      </button>
    </main>
  );
}

export default sentTicket;
