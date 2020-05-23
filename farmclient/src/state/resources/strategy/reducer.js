import initialStore from "../store";
import {
    // GET
    FETCH_STRATEGY_START,
    FETCH_STRATEGY_SUCCESS,
    FETCH_STRATEGY_FAILURE,

    // POST
    ADD_STRATEGY_START,
    ADD_STRATEGY_SUCCESS,
    ADD_STRATEGY_FAILURE,

    // PUT
    UPDATE_STRATEGY_START,
    UPDATE_STRATEGY_SUCCESS,
    UPDATE_STRATEGY_FAILURE,

    // DELETE
    DELETE_STRATEGY_START,
    DELETE_STRATEGY_SUCCESS,
    DELETE_STRATEGY_FAILURE,
} from "./action-types";


export default (state = initialStore, action) => {
    // For logs
    console.log("\nReducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {


        default:
            return state;
    }

}