import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { navigateReducer } from "./navigateReducer";
import {interfaceReducer} from "./interfaceReducer";

export default combineReducers({
  global: globalReducer,
  navigate: navigateReducer,
  interface: interfaceReducer
});
