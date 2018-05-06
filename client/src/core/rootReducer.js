import { combineReducers } from "redux";
import products from "./cards/cardReducer";
import user from "./user/reducer";

export default combineReducers({
  products,
  user
});
