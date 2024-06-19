import React from "react";
import AdminPanelLayout from "@/components/layouts/AdminPanelLayout";

import styles from "@/styles/p-admin/index.module.css";
import Box from "@/components/modules/infoBox/InfoBox";

import TicketModel from "@/../../models/Ticket";
// import CommentModel from "@/../../models/Comment";
import UserModel from "@/../../models/User";
import ProductModel from "@/../../models/Product";
import connectToDB from "@/../../configs/db";
import SaleChart from "@/components/templates/p-admin/index/SaleChart";
import GrowthChart from "@/components/templates/p-admin/index/GrowthChart";



async function AdminHomePage() {
  connectToDB();
  const tickets = await TicketModel.find({}).lean();
  const users = await UserModel.find({}).lean();
  const products = await ProductModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <main>
        <section className={styles.dashboard_contents}>
          <Box title="Total Recived Tickets" value={tickets.length} />
          <Box title="Total Products" value={products.length} />
          <Box title="Total Orders" value="333" />
          <Box title="Total Users" value={users.length} />
        </section>{" "}
        <div className={styles.dashboard_charts}>
          <section>
            <p>Sale statistics</p>
            <SaleChart/>
          </section>
          <section>
            <p>Growth rate</p>
            <GrowthChart/>
          </section>
        </div>
      </main>
    </AdminPanelLayout>
  );
}

export default AdminHomePage;
