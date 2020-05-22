import { combineReducers } from "redux";
// IMPORT ACTION TYPES

import initialStore from "../store";

export const reducerTemplate = (state = initialStore, action) => {
    // For logs
    console.log("\nReducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {


        default:
            return state;
    }

}

// IMPORT REDUCERS
// import userReducer from "./userReducer";
// import farmReducer from "./farmReducer";
// import strategyReducer from "./strategiesReducer";

export default combineReducers(
    // userReducer,
    // farmReducer,
    // strategyReducer
);