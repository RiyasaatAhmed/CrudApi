import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../combineReducers/combineReducers";

export default configureStore({
  reducer: combineReducers,

  devTools: true,
});
