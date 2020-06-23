import initialStore from "../store";
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
    console.log("\nReducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {
        case ADD_PUMP_START:
            return {
                ...state,
                pumps: {
                    isFetching: true,
                    error: null,
                },

            };
        case ADD_PUMP_SUCCESS:
            return {
                ...state,
                pumps: {
                    isFetching: false,
                    error: null,
                    data: [...state.pumps, action.payload]
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

            }

        default:
            return state;
    }

}