"use client";
import React, { useState } from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function AddProduct() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [suitableFor, setSuitableFor] = useState("");
  const [smell, setSmell] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState({});

  const addProduct = async () => {
    // Validation (You) ✅👇

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);
    formData.append("weight", weight);
    formData.append("suitableFor", suitableFor);
    formData.append("smell", smell);
    formData.append("tags", tags.split("،"));
    formData.append("img", img);

    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    // console.log("Res ->", res);

    if (res.status === 201) {
      swal({
        title: "product create successfully",
        icon: "success",
        buttons: "UnderStand",
      }).then(() => {
        router.refresh();
      });
    }
  };
  return (
    <section className={styles.discount}>
      <p style={{textAlign:"left"}}>Add New Product</p>
      <div className={styles.discount_main}>
        <div>
          <label>Product Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Please Inser Name Of Product"
            type="text"
          />
        </div>
        <div>
          <label>Product Price</label>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Please Insert Product Price"
            type="text"
          />
        </div>

        <div>
          <label>Short Description</label>
          <input
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
            placeholder="Short Desc..."
            type="text"
          />
        </div>
        <div>
          <label>Long Description</label>
          <input
            value={longDescription}
            onChange={(event) => setLongDescription(event.target.value)}
            placeholder="Long Desc..."
            type="text"
          />
        </div>
        <div>
          <label>Weight</label>
          <input
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            placeholder="Weight"
            type="text"
          />
        </div>
        <div>
          <label>Sutaible For:</label>
          <input
            value={suitableFor}
            onChange={(event) => setSuitableFor(event.target.value)}
            placeholder="sutiable for ..."
            type="text"
          />
        </div>
        <div>
          <label>Smell Amount</label>
          <input
            value={smell}
            onChange={(event) => setSmell(event.target.value)}
            placeholder="smell amount"
            type="text"
          />
        </div>
        <div>
          <label>Product Tags</label>
          <input
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="sample : Turk, Spanish, Espersoo"
            type="text"
          />
        </div>
        <div>
          <label>Product Picture</label>
          <input
            onChange={(event) => setImg(event.target.files[0])}
            type="file"
          />
        </div>
      </div>
      <button onClick={addProduct}>Insert</button>
    </section>
  );
}

export default AddProduct;
