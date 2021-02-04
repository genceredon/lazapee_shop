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
    case types.PRODUCT_DECREMENT_SUCCESS:
      return {
        ...state, productList: state.productList.map(p => p._id === action.id ?
          { ...p, stockCount: p.stockCount - (p.soldCount + 1) } :
          p
        )
      };
    case types.PRODUCT_UPDATE_SUCCESS:
      console.log(action.payload.productList)
      return { ...state, productList: action.payload.productList }
    default:
      return state;
  }
};

export default productReducer;
