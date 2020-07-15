import initialStore from "./store";
import {
    // ADD
    ADD_FARM_START,
    ADD_FARM_SUCCESS,
    ADD_FARM_FAILURE,

    // PUT
    UPDATE_FARM_START,
    UPDATE_FARM_SUCCESS,
    UPDATE_FARM_FAILURE,

    // DELETE
    DELETE_FARM_START,
    DELETE_FARM_SUCCESS,
    DELETE_FARM_FAILURE
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
    console.log("\nFarm reducer running.");
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
                data: action.payload.farms,
            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // ADD
        case ADD_FARM_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case ADD_FARM_SUCCESS:
            console.log(`
                STATE in ADD_FARM_SUCCESS:
                ${state}
                keys: ${Object.keys(state)}
                state.data: ${state.data}
            `);
            return {
                ...state,
                isFetching: false,
                error: null,
                data: [...state.data, action.payload],
            };
        case ADD_FARM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        // UPDATE
        case UPDATE_FARM_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case UPDATE_FARM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: sortById([
                    ...state.data.filter(farm => farm.id !== action.payload.id),
                    action.payload
                ])//.sort((a, b) => a.id > b.id ? 1 : -1),
            };
        case UPDATE_FARM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // DELETE
        case DELETE_FARM_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case DELETE_FARM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: state.data.filter(farm => farm.id !== action.payload)
            };
        case DELETE_FARM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        default:
            return state;
    }

}