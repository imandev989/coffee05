"use client";
import Link from "next/link";
import styles from "./table.module.css";
import totalStyles from "./totals.module.css";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import stateData from "@/utils/stateData";
import Select from "react-select";
import { showSwal } from "@/utils/helpers";

const stateOptions = stateData();

const Table = () => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [stateSelectedOption, setStateSelectedOption] = useState(null);
  const [changeAddress, setChangeAddress] = useState(false);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);
  }, []);

  useEffect(calcTotalPrice, [cart]);

  function calcTotalPrice() {
    let price = 0;

    if (cart.length) {
      price = cart.reduce(
        (prev, current) => prev + current.price * current.count,
        0
      );
      setTotalPrice(price);
    }

    setTotalPrice(price);
  }

  const checkDiscount = async () => {
    // Validation (You) ✅

    const res = await fetch("api/discounts/use", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: discount }),
    });

    console.log("Response ->", res);

    if (res.status === 404) {
      return showSwal("Your Discount Code is Invalid", "error", "Try Again");
    } else if (res.status === 422) {
      return showSwal("Your Response Code Expired", "error", "Try Again");
    } else if (res.status === 200) {
      const discountCode = await res.json();
      const newPrice = totalPrice - (totalPrice * discountCode.percent) / 100;
      setTotalPrice(newPrice);
      return showSwal(
        "Your Discount Code Successfully Used",
        "success",
        "Understand"
      );
    }
  };

  return (
    <>
      {" "}
      <div className={styles.tabel_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th> Sum</th>
              <th>Count</th>
              <th>Price</th>
              <th>Product</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <td>$ {(item.count * item.price).toLocaleString()} </td>
                <td className={styles.counter}>
                  <div>
                    <span>-</span>
                    <p>{item.count}</p>
                    <span>+</span>
                  </div>
                </td>
                <td className={styles.price}>
               {item.price.toLocaleString()}$ 
                </td>
                <td className={styles.product}>
                  <img
                    src="https://set-coffee.com/wp-content/uploads/2020/12/Red-box-DG--430x430.jpg"
                    alt=""
                  />
                  <Link href={"/"}>{item.name}</Link>
                </td>

                <td>
                  <IoMdClose className={styles.delete_icon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <section>
          <button className={styles.update_btn}> Update Bascket</button>
          <div>
            <button className={styles.set_off_btn} onClick={checkDiscount}>
              Use Copen
            </button>
            <input
              type="text"
              value={discount}
              onChange={(event) => setDiscount(event.target.value)}
              placeholder="Discount Code"
            />
          </div>
        </section>
      </div>
      <div className={totalStyles.totals}>
        <p className={totalStyles.totals_title}>
          The total of the shopping cart
        </p>

        <div className={totalStyles.subtotal}>
          <p>Sum </p>
          <p>205,000 $</p>
        </div>

        <p className={totalStyles.motor}>
          {" "}
          bike delivery: <strong> 30,000 </strong>
        </p>
        <div className={totalStyles.address}>
          <p>Transportation</p>
          <span>Transportation to Istanbul (Istanbul city only)</span>
        </div>
        <p
          onClick={() => setChangeAddress((prev) => !prev)}
          className={totalStyles.change_address}
          style={{color:"blue"}}
        >
          Change Address
        </p>
        {changeAddress && (
          <div className={totalStyles.address_details}>
            <Select
              defaultValue={stateSelectedOption}
              onChange={setStateSelectedOption}
              isClearable={true}
              placeholder={"State"}
              isRtl={true}
              isSearchable={true}
              options={stateOptions}
            />
            <input type="text" placeholder="City" />
            <input type="number" placeholder="Postal code" />
            <button onClick={() => setChangeAddress(false)}>Update</button>
          </div>
        )}

        <div className={totalStyles.total}>
          <p>Total</p>
          <p> $ {totalPrice.toLocaleString()}</p>
        </div>
        <Link href={"/checkout"}>
          <button className={totalStyles.checkout_btn}>
            Continue to settle the account
          </button>
        </Link>
      </div>
    </>
  );
};

export default Table;
