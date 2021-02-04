import { Product } from "../models/Product";

export interface StoreState {
  productList: Product[];
}

export const initialState: StoreState = {
  productList: [],
};
