import { createStore } from "redux";
import productReducer from "./reducers/productReducer";

export default function configureState() {
  return createStore(productReducer);
}
