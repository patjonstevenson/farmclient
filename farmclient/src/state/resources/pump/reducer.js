import initialStore from "./store";
import {
    // GET
    // FETCH_PUMP_START,
    // FETCH_PUMP_SUCCESS,
    // FETCH_PUMP_FAILURE,

    // ADD
    ADD_PUMP_START,
    ADD_PUMP_SUCCESS,
    ADD_PUMP_FAILURE,

    // PUT
    UPDATE_PUMP_START,
    UPDATE_PUMP_SUCCESS,
    UPDATE_PUMP_FAILURE,

    // DELETE
    DELETE_PUMP_START,
    DELETE_PUMP_SUCCESS,
    DELETE_PUMP_FAILURE,

    // ASSIGN STRATEGY
    ASSIGN_STRATEGY_START,
    ASSIGN_STRATEGY_SUCCESS,
    ASSIGN_STRATEGY_FAILURE
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
    console.log("\nPump reducer running.");
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
                data: action.payload.pumps,
            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // ADD
        case ADD_PUMP_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case ADD_PUMP_SUCCESS:
            return {
                ...state,

                isFetching: false,
                error: null,
                data: [...state.data, action.payload],
                // pumpsById: {
                //     ...state.byId,
                //     [action.payload.id]: action.payload
                // },
                // pumpsByFarmId: action.payload.farmId
                //     ? {
                //         ...state.byFarmId,
                //         [action.payload.farmId]: [
                //             ...stateByFarmId[action.payload.farmId],
                //             action.payload
                //         ]
                //     } : {
                //         ...state.byFarmId,
                //     }
            };
        case ADD_PUMP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        // UPDATE
        case UPDATE_PUMP_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case UPDATE_PUMP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: sortById([
                    ...state.data.filter(pump => pump.id !== action.payload.id),
                    action.payload
                ])//.sort((a, b) => a.id > b.id ? 1 : -1),
            };
        case UPDATE_PUMP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // DELETE
        case DELETE_PUMP_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case DELETE_PUMP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: state.data.filter(pump => pump.id !== action.payload)
            };
        case DELETE_PUMP_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // ASSIGN_STRATEGY
        case ASSIGN_STRATEGY_START:
            return {
                ...state,

            };
        case ASSIGN_STRATEGY_SUCCESS:
            return {
                ...state,

            };
        case ASSIGN_STRATEGY_FAILURE:
            return {
                ...state,

            };

        default:
            return state;
    }
}