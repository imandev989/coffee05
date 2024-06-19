import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/tickets/table.module.css";
import Table from "@/components/templates/p-admin/tickets/Table";
import TicketModel from "@/../../models/Ticket";
import connectToDB from "../../../../configs/db";

const page = async () => {
  connectToDB();
  const tickets = await TicketModel.find({ isAnswer: false })
    .sort({ _id: -1 })
    .populate("user")
    .populate("department")
    .lean();

  return (
    <Layout>
      <main>
        {tickets.length === 0 ? (
          <p className={styles.empty}>Ticket Not Found</p>
        ) : (
          <Table
            tickets={JSON.parse(JSON.stringify(tickets))}
            title="Users List"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
