import { Product } from "../../models/Product";
import { PRODUCT_DECREMENT_SUCCESS, PRODUCT_LOAD_SUCCESS } from "./ActionTypes";
import { CustomAction } from "./CustomAction";


export const LoadProductsSuccess = (products: Product[]): CustomAction => ({
    type: PRODUCT_LOAD_SUCCESS,
    payload: {
      productList: products,
    }
});

export const ProductDecrementAction = (_id: string, products: Product[]): CustomAction => ({
    type: PRODUCT_DECREMENT_SUCCESS,
    payload: {
        productList: products
    },
    id: _id
});