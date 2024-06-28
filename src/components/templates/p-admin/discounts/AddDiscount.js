"use client";
import React, { useEffect, useState } from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function AddDiscount() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [percent, setPercent] = useState("");
  const [maxUse, setMaxUse] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      // Fetch to get products data
    };

    getProducts();
  }, []);

  const addDiscount = async () => {
    // Validation (You) ✅

    const discount = {
      code,
      percent,
      maxUse,
    };

    const res = await fetch("/api/discounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discount),
    });

    if (res.status === 201) {
      swal({
        title: "Discount Code Created Successfully",
        icon: "success",
        buttons: "Understand",
      }).then(() => {
        setCode("");
        setPercent("");
        setMaxUse("");
        router.refresh();
      });
    }
  };

  return (
    <section className={styles.discount}>
      <p style={{textAlign:"left"}}>Add New Discount Code </p>
      <div className={styles.discount_main}>
        <div>
          <label> Discount ID</label>
          <input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="Please Inser Discount Code"
            type="text"
          />
        </div>
        <div>
          <label>Discount Percentage</label>
          <input
            value={percent}
            onChange={(event) => setPercent(event.target.value)}
            placeholder="Please Insert Percent of Discount Code"
            type="text"
          />
        </div>
        <div>
          <label> Maximum Use</label>
          <input
            value={maxUse}
            onChange={(event) => setMaxUse(event.target.value)}
            placeholder="Maximum Use of Code"
            type="text"
          />
        </div>
        <div>
          <label>Product</label>
          <select name="" id="">
            <option value="">Turkish Coffee</option>
            <option value="">Arabica Coffee</option>
            <option value="">Espersso Coffe</option>
          </select>
        </div>
      </div>
      <button onClick={addDiscount}>Add</button>
    </section>
  );
}

export default AddDiscount;
