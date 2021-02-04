import { CustomAction } from "./CustomAction";
import * as service from "../../services/lazapeeService";
import * as types from "./ActionTypes";
import { Product } from "../../models/Product";
import { Dispatch } from "react";

function loadProductsSuccess(products: Product[]): CustomAction {
  return {
    type: types.PRODUCT_LOAD_SUCCESS,
    payload: {
      productList: products,
    },
  };
}

export function loadProducts(dispatch: Dispatch<any>) {
  service
    .getAllProducts()
    .then((products) => dispatch(loadProductsSuccess(products)));
}
