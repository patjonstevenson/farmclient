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
    DELETE_PUMP_FAILURE
} from "./action-types";

export default (state = initialStore, action) => {
    // For logs
    console.log("\nPump reducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {
        // ADD
        case ADD_PUMP_START:
            return {
                ...state,
                pumps: {
                    isFetching: true,
                    error: null,
                }
            };
        case ADD_PUMP_SUCCESS:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: null,
                    data: [...state.pumps.data, action.payload],
                }
                // pumpsById: {
                //     ...state.pumps.byId,
                //     [action.payload.id]: action.payload
                // },
                // pumpsByFarmId: action.payload.farmId
                //     ? {
                //         ...state.pumps.byFarmId,
                //         [action.payload.farmId]: [
                //             ...state.pumpsByFarmId[action.payload.farmId],
                //             action.payload
                //         ]
                //     } : {
                //         ...state.pumps.byFarmId,
                //     }
            };
        case ADD_PUMP_FAILURE:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: action.payload,
                }
            }

        // UPDATE
        case UPDATE_PUMP_START:
            return {
                ...state,
                pumps: {
                    isFetching: true,
                    error: null,
                }
            };
        case UPDATE_PUMP_SUCCESS:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: null,
                    data: [
                        ...state.pumps.data.filter(pump => pump.id !== action.payload.id),
                        action.payload
                    ].sort((a, b) => a.id > b.id ? 1 : -1),
                }
            };
        case UPDATE_PUMP_FAILURE:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: action.payload,
                }
            };

        // DELETE
        case DELETE_PUMP_START:
            return {
                ...state,
                pumps: {
                    isFetching: true,
                    error: null,
                }
            };
        case DELETE_PUMP_SUCCESS:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: null,
                    data: state.pumps.data.filter(pump => pump.id !== action.payload)
                }
            };
        case DELETE_PUMP_FAILURE:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: action.payload,
                }
            };

        default:
            return state;
    }
}