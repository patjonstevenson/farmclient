import { combineReducers } from "redux";

import userReducer from "../resources/user/reducer";
import farmReducer from "../resources/farm/reducer";
import strategyReducer from "../resources/strategy/reducer";

export default combineReducers(
    userReducer,
    farmReducer,
    strategyReducer
);