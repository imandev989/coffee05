"use client";
import React from "react";
import styles from "@/styles/p-user/tickets.module.css";
import Link from "next/link";
// import Box from "@/components/templates/p-user/tickets/box/Box";
import Ticket from "./Ticket";

function Tickets({ tickets }) {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <span>All Tickets</span>
        <Link href="/p-user/tickets/sendTicket"> Send New Ticket </Link>
      </h1>

      <div className={styles.boxes}>
        {/* <Box title={"باز"} value={0} />
        <Box title={"بسته"} value={0} />
        <Box title={"پاسخ داده شده"} value={0} />
        <Box title={"پایان یافته"} value={0} />
        <Box title={"همه"} value={0} /> */}
      </div>

      <div className={styles.filtering}>
        <div>
          <select>
            <option>All</option>
            <option>Sent</option>
            <option>Recive</option>
          </select>
          <select>
            <option>All</option>
            <option>Open</option>
            <option>Close</option>
            <option>Responsed</option>
            <option>Finished</option>
          </select>
          <select>
            <option>Response Date</option>
            <option>Create Date</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </div>

      <div>
        {tickets.map((ticket) => (
          <Ticket key={ticket._id} {...ticket} />
        ))}
      </div>

      {tickets.length === 0 && (
        <div className={styles.empty}>
          <p>No Ticket Find</p>
        </div>
      )}
    </main>
  );
}

export default Tickets;
