import { combineReducers } from "redux";
import postReducers from '../slices/postSlice'

export default combineReducers({
  post: postReducers
});
