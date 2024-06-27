import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/answerTicket.module.css";
import Link from "next/link";
import Answer from "@/components/templates/p-user/tickets/Answer";

import TicketModel from "@/../../models/Ticket";
import connectToDB from "../../../../../../configs/db";

const page = async ({ params }) => {
  const ticketID = params.id;
  connectToDB();
  const ticket = await TicketModel.findOne({ _id: ticketID })
    .populate("user", "name")
    .lean();

  const answerTicket = await TicketModel.findOne({
    mainTicket: ticket._id,
  }).populate("user", "name");

  console.log("answerTicket ->", answerTicket);
  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.title}>
          <span> Test Ticket</span>
          <Link href="/p-user/tickets/sendTicket">  Send New Ticket</Link>
        </h1>

        <div>
          <Answer type="user" {...ticket} />
          {answerTicket && <Answer {...ticket} type="admin" />}

          {!answerTicket && (
            <div className={styles.empty}>
              <p>Response Has Not Recived Yet</p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default page;
