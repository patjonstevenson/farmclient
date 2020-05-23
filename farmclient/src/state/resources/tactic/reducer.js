import initialStore from "../store";
import {
    // GET
    // FETCH_TACTIC_START,
    // FETCH_TACTIC_SUCCESS,
    // FETCH_TACTIC_FAILURE,

    // POST
    ADD_TACTIC_START,
    ADD_TACTIC_SUCCESS,
    ADD_TACTIC_FAILURE,

    // PUT
    UPDATE_TACTIC_START,
    UPDATE_TACTIC_SUCCESS,
    UPDATE_TACTIC_FAILURE,

    // DELETE
    DELETE_TACTIC_START,
    DELETE_TACTIC_SUCCESS,
    DELETE_TACTIC_FAILURE
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