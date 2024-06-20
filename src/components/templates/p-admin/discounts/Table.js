import React from "react";
import styles from "./table.module.css";

function Table({ discounts }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Code</th>
          <th>Percent</th>
          <th>Maximum Use</th>
          <th>Number Of Use</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {discounts.map((discount, index) => (
          <tr key={discount._id}>
            <td>{index + 1}</td>
            <td>{discount.code}</td>
            <td>{discount.percent}</td>
            <td>{discount.maxUse}</td>
            <td>{discount.uses}</td>
            <td>
              <button type="button" className={styles.delete_btn}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
