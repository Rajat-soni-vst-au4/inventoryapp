import React from "react";
import "./ProductShow.css";

import Button from "../Button/Button";

const ProductShow = ({ CollectionOfData }) => {

  const Dummy = [
    {
      productDes: "Dairy-Milk",
      productName: "choclate",
      productPrice: 40,
      id: 24,
    },
    {
      productDes: "FruitnNut",
      productName: "choclate",
      productPrice: 60,
      id: 25,
    },
    {
      productDes: "Cranberry",
      productName: "juice",
      productPrice: 110,
      id: 26,
    },
    ...CollectionOfData,
  ];

  const Showlist = Dummy.map((item) => (
    <li key={item.id} className="list">
      {item.productName} {item.productDes} {item.productPrice}{" "}
      <Button dataId={item} />
    </li>
  ));
  return (
    <div>
      <ul>{Showlist}</ul>
    </div>
  );
};

export default ProductShow;
