import Link from "next/link";
import styles from "./latest.module.css";
import { FaChevronLeft } from "react-icons/fa6";
import Product from "@/components/modules/product/Product";

const Latest = ({ products }) => {
  return (
    <div className={styles.container}>
      <section className={styles.title}>
        <div>
          <p>Latest Products </p>
          <span>Latest products</span>
        </div>
        <Link className={styles.link} href={"/category"}>
          View All <FaChevronLeft />{" "}
        </Link>
      </section>
      <main data-aos="fade-up" className={styles.products}>
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </main>
    </div>
  );
};

export default Latest;
