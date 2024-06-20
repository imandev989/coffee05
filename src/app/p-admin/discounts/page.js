import Table from "@/components/templates/p-admin/discounts/Table";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/discounts/table.module.css";

import DiscountModel from "@/../../models/Discount";
import AddDiscount from "@/components/templates/p-admin/discounts/AddDiscount";
import connectToDB from "../../../../configs/db";

const Discounts = async () => {
  connectToDB();
  const discounts = await DiscountModel.find({}).sort({ _id: -1 }).lean();

  return (
    <Layout>
      <main>
        <AddDiscount />

        {discounts.length === 0 ? (
          <p className={styles.empty}>Discount Code Does not Exist</p>
        ) : (
          <Table
            discounts={JSON.parse(JSON.stringify(discounts))}
            title="Discounts List"
          />
        )}
      </main>
    </Layout>
  );
};

export default Discounts;
