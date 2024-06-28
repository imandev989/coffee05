import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/comments/table.module.css";
import Table from "@/components/templates/p-admin/comments/Table";

import CommentModel from "@/../../models/Comment";
import connectToDB from "../../../../configs/db";

const page = async () => {
  connectToDB();
  const comments = await CommentModel.find({})
    .sort({ _id: -1 })
    // .populate("user")
    .populate("productID")
    .lean();
  // console.log("COMMENTS++>>", comments);
  return (
    <Layout>
      <main >
        {comments.length === 0 ? (
          <p className={styles.empty}> Comment Not Exist</p>
        ) : (
          <Table
            comments={JSON.parse(JSON.stringify(comments))}
            title=" Comments List"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
