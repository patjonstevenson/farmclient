import initialStore from "./store";
import {
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
import {
    // FETCH
    FETCH_USER_DATA_START,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE,
} from "../user/action-types";

export default (state = initialStore, action) => {
    // For logs
    console.log("\nTactic reducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {
        // FETCH ALL DATA
        case FETCH_USER_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.payload.tactics,
            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // ADD
        case ADD_TACTIC_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case ADD_TACTIC_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: [...state.data, action.payload],
            };
        case ADD_TACTIC_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        // UPDATE
        case UPDATE_TACTIC_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case UPDATE_TACTIC_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: [
                    ...state.data.filter(tactic => tactic.id !== action.payload.id),
                    action.payload
                ].sort((a, b) => a.id > b.id ? 1 : -1),

            };
        case UPDATE_TACTIC_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // DELETE
        case DELETE_TACTIC_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case DELETE_TACTIC_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: state.data.filter(tactic => tactic.id !== action.payload)
            };
        case DELETE_TACTIC_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        default:
            return state;
    }

}