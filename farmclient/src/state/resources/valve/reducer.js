import initialStore from "./store";
import {
    // ADD
    ADD_VALVE_START,
    ADD_VALVE_SUCCESS,
    ADD_VALVE_FAILURE,

    // PUT
    UPDATE_VALVE_START,
    UPDATE_VALVE_SUCCESS,
    UPDATE_VALVE_FAILURE,

    // DELETE
    DELETE_VALVE_START,
    DELETE_VALVE_SUCCESS,
    DELETE_VALVE_FAILURE
} from "./action-types";
import {
    // FETCH
    FETCH_USER_DATA_START,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE,
} from "../user/action-types";
import { sortById } from "../../helpers";

export default (state = initialStore, action) => {
    // For logs
    console.log("\nValve reducer running.");
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
                data: action.payload.valves,
            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // ADD
        case ADD_VALVE_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case ADD_VALVE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: [...state.data, action.payload],
            };
        case ADD_VALVE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        // UPDATE
        case UPDATE_VALVE_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case UPDATE_VALVE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: sortById([
                    ...state.data.filter(valve => valve.id !== action.payload.id),
                    action.payload
                ])
            };
        case UPDATE_VALVE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // DELETE
        case DELETE_VALVE_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case DELETE_VALVE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: state.data.filter(valve => valve.id !== action.payload)
            };
        case DELETE_VALVE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        default:
            return state;
    }

}