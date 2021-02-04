import { Action } from "redux";
import { Product } from "../../models/Product";

export interface CustomAction extends Action {
  payload: {
    productList: Product[];
  }
  id ?: string;
}
