"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/p-user/sendTicket.module.css";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

function sentTicket() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [departments, setDepartments] = useState([]);
  const [subDepartments, setSubDepartments] = useState([]);
  const [departmentID, setDepartmentID] = useState(-1);
  const [subDepartmentID, setSubDepartmentID] = useState(-1);
  const [priority, setPriority] = useState(1);

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/departments");
      const data = await res.json();
      setDepartments([...data]);
    };

    getDepartments();
  }, []);

  useEffect(() => {
    const getSubDepartments = async () => {
      const res = await fetch(`/api/departments/sub/${departmentID}`);

      if (res.status === 200) {
        const data = await res.json();
        setSubDepartments([...data]);
      }
    };

    getSubDepartments();
  }, [departmentID]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span>  Send New Ticket</span>
        <Link href="/p-user/tickets"> All Tickets</Link>
      </h1>

      <div className={styles.content}>
        <div className={styles.group}>
          <label>Select Department:</label>
          <select onChange={(event) => setDepartmentID(event.target.value)}>
            <option value={-1}>Please Select Department</option>

            {departments.map((department) => (
              <option value={department._id}>{department.title}</option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          <label>Please Select Type of Department:</label>
          <select>
            <option value={-1}>Please Select One Item:</option>

            {subDepartments.map((subDepartment) => (
              <option value={subDepartment._id}>{subDepartment.title} </option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          <label>Please Select One Title:</label>
          <input placeholder="Title..." type="text" />
        </div>
        <div className={styles.group}>
          <label>Please Select priority Level:</label>
          <select>
            <option>Please Select One Item:</option>
            <option value="3">Low</option>
            <option value="2">Mid</option>
            <option value="1">High</option>
          </select>
        </div>
      </div>
      <div className={styles.group}>
        <label>  Please Select Contetnt of Ticket:</label>
        <textarea rows={10}></textarea>
      </div>
      <div className={styles.uploader}>
        <span>Max Size: 6 MByte</span>
        <span> Valid Formats: jpg, png.jpeg, rar, zip</span>
        <input type="file" />
      </div>

      <button className={styles.btn}>
        <IoIosSend />
        Send Ticket{" "}
      </button>
    </main>
  );
}

export default sentTicket;
