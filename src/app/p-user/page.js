import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/index.module.css";
// import Box from "@/components/templates/p-user/index/Box";

import Tickets from "@/components/templates/p-user/index/Tickets";
import Orders from "@/components/templates/p-user/index/Orders";
import { authUser } from "@/utils/serverHelpers";
import TicketModel from "@/../../models/Ticket";
import CommentModel from "@/../../models/Comment";
import WishlistModel from "@/../../models/WishList";
import Box from "@/components/modules/infoBox/InfoBox";

const page = async () => {
  const user = await authUser();
  // console.log("USER", user);
  const tickets = await TicketModel.find({ user: user._id, isAnswer: false })
    .limit(3)
    .populate("department", "title")
    .sort({ _id: -1 })
    .lean();

  const allTickets = await TicketModel.find({ user: user._id });
  const comments = await CommentModel.find({ user: String(user._id) });
  const wishes = await WishlistModel.find({ user: user._id });

  return (
    <Layout>
      <main>
        <section className={styles.boxes}>
          <Box title="All Tickets" value={allTickets.length} />
          <Box title="Total Comments " value={comments.length} />
          <Box title="Total Orders" value="2" />
          <Box title="Total Favourites" value={wishes.length} />
        </section>
        <section className={styles.contents}>
          <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
          <Orders />
        </section>
      </main>
    </Layout>
  );
};

export default page;
