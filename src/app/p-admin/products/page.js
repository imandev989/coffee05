import React from "react";
import Layout from "@/components/layouts/AdminPanelLayout";
import styles from "@/components/templates/p-admin/products/table.module.css";
import Table from "@/components/templates/p-admin/products/Table";

import ProductModel from "@/../../models/Product";
import connectToDB from "../../../../configs/db";
import AddProduct from "@/components/templates/p-admin/products/AddProduct";


const page = async () => {
  connectToDB();
  const products = await ProductModel.find({}).sort({ _id: -1 }).lean();

  return (
    <Layout>
      <main>
      <AddProduct />

        {products.length === 0 ? (
          <p className={styles.empty}>Prdouct Does not Exist</p>
        ) : (
          <Table
            products={JSON.parse(JSON.stringify(products))}
            title="Products List"
          />
        )}
      </main>
    </Layout>
  );
};

export default page;
