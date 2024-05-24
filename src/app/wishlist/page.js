import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Product from "@/components/modules/product/Product";
import connectToDB from "../../../configs/db";
import styles from "@/styles/wishlist.module.css";
import { authUser } from "@/utils/serverHelpers";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import WishlistModel from "../../../models/WishList";

const page = async () => {
  let wishes = [];
  connectToDB();
  const user = await authUser();
  if (user) {
    wishes = await WishlistModel.find({ user: user._id })
      .populate("product", "name price score")
      .lean();
  }

  return (
    <>
      <Navbar />
      <Breadcrumb route={"Favourites"} />
      <main className={styles.container} data-aos="fade-up">
        <p className={styles.title}>Your Favorites Products</p>
        <section>
          {wishes.length > 0 &&
            wishes.map((wish) => <Product key={wish._id} {...wish.product} />)}
        </section>
      </main>

      {wishes.length === 0 && (
        <div class={styles.wishlist_empty} data-aos="fade-up">
          <FaRegHeart />
          <p>No product found</p>
          <span>You do not have any products in your wishlist yet.</span>
          <span>On the "Shop" page you will find many interesting products.</span>
          <div>
            <Link href="/category">Return to the store</Link>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default page;
