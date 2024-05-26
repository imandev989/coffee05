import Layout from "@/components/layouts/UserPanelLayout";
import styles from "@/styles/p-user/index.module.css";
import Box from "@/components/templates/p-user/index/Box";
import Tickets from "@/components/templates/p-user/index/Tickets";
import Orders from "@/components/templates/p-user/index/Orders";
const page = () => {
  return (
    <Layout>
      <main>
        <section className={styles.boxes}>
          <Box title="Total Tickets " value="20" />
          <Box title="Total Comments " value="0" />
          <Box title="Total Orders" value="2" />
          <Box title="Total Favourites" value="10" />
        </section>
        <section className={styles.contents}>
          <Tickets />
          <Orders />
        </section>
      </main>
    </Layout>
  );
};

export default page;
