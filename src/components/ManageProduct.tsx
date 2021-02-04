import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Product } from "../models/Product";
import productReducer from "../redux/reducers/productReducer";
import { StoreState } from "../redux/StoreState";

type RouteParams = {
  productId: string;
};

const ManageProduct: React.FC = () => {
  const params = useParams<RouteParams>();

  const data = useSelector<StoreState>(
    (state) => state.productList
  ) as Product[];

  const productList = data.find((p) => p._id === params.productId) as Product;

  const [productListData, setProductListData] = useState<Product[]>(data);
  const [productData, setProductData] = useState<Product>(productList);

  


  return (
    <div>
      <p>Manage Product</p>
      <p>Title: {productData.title}</p>
      <p>Price: {productData.price}</p>
      <p>Rating: {productData.rating}</p>
      <p>Stock: {productData.stockCount}</p>
    </div>
  );
};

export default ManageProduct;
