"use client";
import { showSwal } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

const AddToWishlist = ({ productID }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const authUser = async () => {
      const res = await fetch("/api/auth/me");
      // console.log(res);
      if (res.status === 200) {
        const data = await res.json();
        // console.log(data);
        setUser({ ...data });
      }
    };

    authUser();
  }, []);




  const addToWishlist = async (event) => {
    event.preventDefault();
    if (!user?._id) {
      return showSwal(
        "For add to Favourites you must First Login",
        "error",
        "Understood"
      );
    }

    const wish = {
      user: user._id,
      product: productID,
    };

    const res = await fetch("/api/wishlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wish),
    });

    console.log("Response ->", res);

    if (res.status === 201) {
      showSwal("product Added to Favourites", "success", "undestand");
    }
  };

  return (
    <div onClick={addToWishlist}>
      <CiHeart />
      <a href="/">Add To Favorites</a>
    </div>
  );
};

export default AddToWishlist;
