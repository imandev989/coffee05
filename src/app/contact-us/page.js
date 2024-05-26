import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Form from "@/components/templates/contact-us/Form";
import Information from "@/components/templates/contact-us/Information";
import Map from "@/components/templates/contact-us/Map";
import styles from "@/styles/contact-us.module.css";
import { authUser } from "@/utils/serverHelpers";
import Link from "next/link";

// [35.72021225108499, 51.42222691580869]
// [35.70153474690238, 51.41497422314844]

const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"contact US"} />

      <div className={styles.container}>
        <main className={styles.maps}>
          <section>
            <Map
              position={[28.96527628718749, 41.01006774771353]}
              center={[28.942075297834947, 41.012693795591105]}
            >
              <span> My Store</span>
              <h3>Store Address</h3>
              <p>Store Address Details</p>
              <p>021-88305827</p>
              <Link href="/about-us"> About Store</Link>
            </Map>
          </section>
          <section>
            <Map
            position={[28.96527628718749, 41.01006774771353]}
            center={[28.942075297834947, 41.012693795591105]}
            >
              <span> Our Store</span>
              <h3>Store2 Address</h3>
              <p>Store2 Details Address</p>
              <p>Phone Number</p>
              <Link href="/about-us"> About Store</Link>
            </Map>
          </section>
        </main>
      </div>

      <div className={styles.container}>
        <div className={styles.contents}>
          <Information />
          <Form />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
