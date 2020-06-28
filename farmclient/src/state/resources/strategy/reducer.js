import initialStore from "./store";
import {
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
    console.log("\nStrategy reducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {
        // ADD
        case ADD_STRATEGY_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case ADD_STRATEGY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: [...state.strategies.data, action.payload],
            };
        case ADD_STRATEGY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        // UPDATE
        case UPDATE_STRATEGY_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case UPDATE_STRATEGY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: [
                    ...state.strategies.data.filter(strategy => strategy.id !== action.payload.id),
                    action.payload
                ].sort((a, b) => a.id > b.id ? 1 : -1),
            };
        case UPDATE_STRATEGY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // DELETE
        case DELETE_STRATEGY_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case DELETE_STRATEGY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: state.strategies.data.filter(strategy => strategy.id !== action.payload)
            };
        case DELETE_STRATEGY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        default:
            return state;
    }

}