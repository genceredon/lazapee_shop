import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Product } from "../models/Product";
import { UpdateProductAction } from "../redux/actions/ActionCreators";
import { StoreState } from "../redux/StoreState";

type RouteParams = {
  productId: string;
};

const ManageProduct: React.FC = () => {
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();
  const history = useHistory();

  const data = useSelector<StoreState>(
    (state) => state.productList
  ) as Product[];

  const productList = data.find((p) => p._id === params.productId) as Product;

  const [productListData, setProductListData] = useState<Product[]>(data);
  const [productData, setProductData] = useState<Product>(productList);

  function handleUpdate(e:any) {
    setProductData({
      ...productData, [e.target.name]: e.target.value.trim(),
    });
  }

  function handleSubmit(e: {preventDefault: () => void}){
    e.preventDefault();

    const updatedProductList = productListData.map((pl) => {
      if(pl._id === productList._id){
        return new Product({
          ...productData,
        });
      }
      return pl;
    });

    setProductListData(updatedProductList);

    dispatch(UpdateProductAction(updatedProductList));
    history.push("/products");
  }

  return (
    <div>
      <p>Manage Product</p>
      <form onSubmit={handleSubmit}>
        <div style={{ width: "30%", margin: "auto" }}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={productData?.title}
            style={{ margin: "1px 0px 1px 5px" }}
            onChange={handleUpdate}
          />
          <br />
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={productData?.price}
            style={{ margin: "1px 0px 1px 5px" }}
            onChange={handleUpdate}
          />
          <br />
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={productData?.rating}
            style={{ margin: "1px 0px 1px 5px" }}
            onChange={handleUpdate}
          />
          <br />
          <label>Stock:</label>
          <input
            type="number"
            name="stockCount"
            defaultValue={productData?.stockCount}
            style={{ margin: "1px 0px 1px 5px" }}
            onChange={handleUpdate}
          />
          <br />
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default ManageProduct;
