import { combineReducers } from "redux";

import userReducer from "./resources/user/reducer";
import farmReducer from "./resources/farm/reducer";
import pumpReducer from "./resources/pump/reducer";
import valveReducer from "./resources/valve/reducer";
import strategyReducer from "./resources/strategy/reducer";
import tacticReducer from "./resources/tactic/reducer";

export default combineReducers(
    {
        users: userReducer,
        farms: farmReducer,
        pumps: pumpReducer,
        valves: valveReducer,
        strategies: strategyReducer,
        tactics: tacticReducer
    }
);