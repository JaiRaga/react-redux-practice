import { combineReducers } from "redux";
import cakeReducer from "./cake";
import icecreamReducer from "./icecream";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  icecreams: icecreamReducer
});

export default rootReducer;
