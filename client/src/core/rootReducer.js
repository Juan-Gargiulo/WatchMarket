import { combineReducers } from "redux";
import app from "./app/reducer"
import products from "./cards/cardReducer";
import user from "./user/reducer";
import purchases from "./purchases/reducer"

export default combineReducers({
  app,
  products,
  user,
  purchases
});
