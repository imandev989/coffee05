"use client";
import { FaFacebookF, FaStar, FaTwitter, FaRegStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";
import AddToWishlist from "./AddToWishlist";
import { useState } from "react";
import { showSwal } from "@/utils/helpers";

// ❌ async
const Details = ({ product }) => {
  const [count, setCount] = useState(1);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length) {
      const isInCart = cart.some((item) => item.id === product._id);

      if (isInCart) {
        cart.forEach((item) => {
          if (item.id === product._id) {
            item.count = item.count + count;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        showSwal(
          "Product Added To Bascket Successfully",
          "success",
          "understand"
        );
      } else {
        const cartItem = {
          id: product._id,
          name: product.name,
          price: product.price,
          count,
        };

        cart.push(cartItem);

        localStorage.setItem("cart", JSON.stringify(cart));
        showSwal(
          "Product Added To Bascket Successfully",
          "success",
          "understand"
        );
      }
    } else {
      const cartItem = {
        id: product._id,
        name: product.name,
        price: product.price,
        count,
      };

      cart.push(cartItem);

      localStorage.setItem("cart", JSON.stringify(cart));
      showSwal(
        "Product Added To Bascket Successfully",
        "success",
        "understand"
      );
    }
  };

  return (
    <main style={{ width: "63%" }}>
      <Breadcrumb title={product.name} />
      <h2>{product.name}</h2>

      <div className={styles.rating}>
      <p>(View {product.comments.length} User)</p>
        <div>
          {new Array(product.score).fill(0).map((item, index) => (
            <FaStar key={index} />
          ))}

          {new Array(5 - product.score).fill(0).map((item, index) => (
            <FaRegStar key={index} />
          ))}
        </div>
        
      </div>

      <p className={styles.price}>$ {product.price.toLocaleString()} </p>
      <span className={styles.description}>{product.shortDescription}</span>

      <hr />

      <div className={styles.Available}>
        <IoCheckmark />
        <p>Available In Store</p>
      </div>

      <div className={styles.cart}>
       
        <div>
          <span onClick={() => setCount(count - 1)}>-</span>
          {count}
          <span onClick={() => setCount(count + 1)}>+</span>
        </div>
        <button onClick={addToCart}>Add To Bascket</button>
      </div>

      <section className={styles.wishlist}>
        <AddToWishlist productID={product._id} />
        <div>
          <TbSwitch3 />
          <a href="/">Compare</a>
        </div>
      </section>

      <hr />

      <div className={styles.details}>
        <strong>Product ID: {product._id}</strong>

        <p>
          <strong>Tag:</strong>
          {product.tags.join(" ,")}
        </p>
      </div>

      <div className={styles.share}>
        <p>Share : </p>
        <a href="/">
          <FaTelegram />
        </a>
        <a href="/">
          <FaLinkedinIn />
        </a>
        <a href="/">
          <FaPinterest />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaFacebookF />
        </a>
      </div>

      <hr />
    </main>
  );
};

export default Details;
