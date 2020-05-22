import { combineReducers } from "redux";
import redu1 from "./redu1";
import redu2 from "./redu2";
import redu3 from "./redu3";
import redu4 from "./redu4";

const rootReducer = combineReducers({ redu1, redu2, redu3, redu4 });

export default rootReducer;
