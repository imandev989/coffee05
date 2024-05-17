"use client";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [fixTop, setFixTop] = useState(false);

  useEffect(() => {
    const fixNavbarToTop = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 101) {
        setFixTop(true);
      } else {
        setFixTop(false);
      }
    };
    window.addEventListener("scroll", fixNavbarToTop);

    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, []);

  return (
    <nav className={fixTop ? styles.navbar_fixed : styles.navbar}>
      <main>
        


      <div className={styles.navbar_icons}>
          <Link href="/cart">
            <FaShoppingCart />
            <span>1</span>
          </Link>
          <Link href="/wishlist">
            <FaRegHeart />
            <span>1</span>
          </Link>
        </div>

        
        <ul className={styles.links}>

              {/* Start My-account section */}
              <div className={styles.dropdown}>
            <Link href="/p-user">
              <IoIosArrowDown className={styles.dropdown_icons} />
              Profile
            </Link>
            <div className={styles.dropdown_content}>
              <Link href="/p-user/orders">Orders</Link>
              <Link href="/p-user/tickets"> Support Tickets </Link>
              <Link href="/p-user/comments">Comments</Link>
              <Link href="/p-user/wishlist">Favourites</Link>
              <Link href="/p-user/account-details"> Account SD</Link>
            </div>
          </div>

          {/* Finish My-account section */}
         
          
          
         
         
          <li>
            <Link href="/rules">Roles</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/category">Store</Link>
          </li>
          <li>
            <Link href="/">Home Page</Link>
          </li>
          {/* <li>
                <Link href="/login-register">ورود / عضویت</Link>
              </li> */}

      
        </ul>

        


        <div>
          <Link href="/">
            <img src="/images/logo2.png" alt="Logo" width={100} height={75} />
          </Link>
        </div>
      </main>
    </nav>
  );
};

export default Navbar;
