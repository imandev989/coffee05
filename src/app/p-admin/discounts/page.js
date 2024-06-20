import Table from "@/components/templates/p-admin/discounts/Table";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/discounts/table.module.css";

import DiscountModel from "@/../../models/Discount";
import connectToDB from "../../../../configs/db";

const Discounts = async () => {
  connectToDB();
  const discounts = await DiscountModel.find({}).lean();

  return (
    <Layout>
      <main>
        <section className={styles.discount}>
          <p>Add New Discount Code</p>
          <div className={styles.discount_main}>
            <div>
              <label>Discount ID</label>
              <input placeholder="Please Insert Discount ID" type="text" />
            </div>
            <div>
              <label>Discount Percentage</label>
              <input placeholder="Please Inser Percentage Discount" type="text" />
            </div>
            <div>
              <label>Maximum Use</label>
              <input placeholder="Maximum Use of Discount Code" type="text" />
            </div>
            <div>
              <label>Product</label>
              <select name="" id="">
                <option value="">Turkish Coffee</option>
                <option value="">Arabica Coffee</option>
                <option value="">Esperso Coffee</option>
              </select>
            </div>
          </div>
          <button>Add</button>
        </section>

        {discounts.length === 0 ? (
          <p className={styles.empty}>Discount Code Does not Exist</p>
        ) : (
          <Table
            discounts={JSON.parse(JSON.stringify(discounts))}
            title="Discount List"
          />
        )}
      </main>
    </Layout>
  );
};

export default Discounts;
