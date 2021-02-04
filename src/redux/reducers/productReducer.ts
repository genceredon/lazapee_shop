import { CustomAction } from "./../actions/CustomAction";
import { StoreState, initialState } from "./../StoreState";
import { Reducer } from "redux";
import * as types from "../actions/ActionTypes";

const productReducer: Reducer<StoreState, CustomAction> = (
  state: StoreState = initialState,
  action: CustomAction
) => {
  switch (action.type) {
    case types.PRODUCT_LOAD_SUCCESS:
      return { ...state, productList: action.payload.productList };
    default:
      return state;
  }
};

export default productReducer;
