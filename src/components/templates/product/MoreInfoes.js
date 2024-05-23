import React from "react";

const MoreInfoes = ({ product }) => {
  return (
    <div>
      <p>More Informations:</p>
      <hr />
      <main>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Weight</p>
          <p>{product.weight} grams</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>SuitableFor</p>
          <p>{product.suitableFor}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Smell Amount</p>
          <p>{product.smell}</p>
        </div>
      </main>
    </div>
  );
};

export default MoreInfoes;
