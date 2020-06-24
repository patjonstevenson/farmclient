import initialStore from "../store";
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

export default (state = initialStore, action) => {
    // For logs
    console.log("\nReducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {

        // ADD
        case ADD_FARM_START:
            return {
                ...state,
                pumps: {
                    isFetching: true,
                    error: null,
                },
            };
        case ADD_FARM_SUCCESS:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: null,
                    data: [...state.pumps.data, action.payload],
                },
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
        case ADD_FARM_FAILURE:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: action.payload,
                },
            }

        // UPDATE
        case UPDATE_FARM_START:
            return {
                ...state,
                pumps: {
                    isFetching: true,
                    error: null,
                },
            };
        case UPDATE_FARM_SUCCESS:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: null,
                    data: [
                        ...state.pumps.data.filter(pump => pump.id !== action.payload.id),
                        action.payload
                    ].sort((a, b) => a.id > b.id ? 1 : -1),
                },
            };
        case UPDATE_FARM_FAILURE:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: action.payload,
                },
            };

        // DELETE
        case DELETE_FARM_START:
            return {
                ...state,
                pumps: {
                    isFetching: true,
                    error: null,
                },
            };
        case DELETE_FARM_SUCCESS:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: null,
                    data: state.pumps.data.filter(pump => pump.id !== action.payload)
                },
            };
        case DELETE_FARM_FAILURE:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: action.payload,
                },
            };

        default:
            return state;
    }

}