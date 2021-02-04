import React from "react";
import { Product } from "../models/Product";

const ManageProduct: React.FC = () => {
  const data = new Product(
    new Product({
      title: "Sample Product",
      price: 0,
      stockCount: 0,
      rating: 0,
    })
  );

  return (
    <div>
      <p>Manage Product</p>
      <p>Title: {data.title}</p>
      <p>Price: {data.price}</p>
      <p>Rating: {data.rating}</p>
      <p>Stock: {data.stockCount}</p>
    </div>
  );
};

export default ManageProduct;
