import styles from "./footer.module.css";
import { MdOutlineCopyright } from "react-icons/md";

import { FaRegHeart } from "react-icons/fa";
import Article from "./Article";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <main className="container">
        <div className={styles.licenses}>
          <img src="/images/logo3.png" width={85} height={85} alt="" />
          <img src="/images/logo3.png" width={85} height={85} alt="" />
          <img src="/images/logo3.png" width={85} height={85} alt="" />
          <img src="/images/logo3.png" width={85} height={85} alt="" />
        </div>
        <ul className={styles.links}>
          <div>
            <h4>Qucik Access</h4>
            <li>
              <Link href={"/category"}> Store </Link>
            </li>
            <li>
              <Link href={"/articles"}> Articles </Link>
            </li>
            <li>
              <Link href={"/cart"}>Buy Basket </Link>
            </li>
            <li>
              <Link href={"/wishlist"}>Favourites</Link>
            </li>
          </div>
          <div>
            <h4> Fotter Menu</h4>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/about-us"}> About Us</Link>
            </li>
            <li>
              <Link href={"/rules"}>Roles</Link>
            </li>
          </div>
        </ul>
        <section>
          <h4>The latest posts</h4>
          <Article
            href={"/article/123"}
            data="December 2023"
            comments="No View "
            img="/images/logo3.png" 
            title="Increase energy with instant coffee powder"
          />

          <hr />

          <Article
            href={"/article/123"}
            data="December 2023"
            comments="No View "
            img="/images/logo3.png" 
            title="Increase energy with instant coffee powder"
          />
        </section>
        <section className={styles.descriptions}>
          <img src="/images/logo3.png" alt="" />
          <p className={styles.descriptions_title}>Turk coffee company</p>

          <div className={styles.description}>
            <FaRegHeart style={{ fontSize: "2rem" }} />
            <p>Turk Coffee </p>
          </div>
          <div className={styles.description}>
            <FaRegHeart />
            <p>Track orders : 312 xxxxx44 </p>
          </div>
          <div className={styles.description}>
            <FaRegHeart />
            <p>support [at] TurkCofee</p>
          </div>
        </section>
      </main>
      <hr />
      <div className="container">
        <p className={styles.copyRight}>
          {" "}
          2023
          <MdOutlineCopyright /> All rights belong to{" "}
          <strong>Turk Coffee</strong> | Design and Implementation
          <strong> Iman dev</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
