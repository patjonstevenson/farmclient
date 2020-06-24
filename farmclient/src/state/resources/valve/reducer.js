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

export default (state = initialStore, action) => {
    // For logs
    console.log("\nValve reducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {
        // ADD
        case ADD_VALVE_START:
            return {
                ...state,
                valves: {
                    isFetching: true,
                    error: null,
                }
            };
        case ADD_VALVE_SUCCESS:
            return {
                ...state,
                valves: {
                    isFetching: false,
                    error: null,
                    data: [...state.valves.data, action.payload],
                }
            };
        case ADD_VALVE_FAILURE:
            return {
                ...state,
                valves: {
                    isFetching: false,
                    error: action.payload,
                }
            }

        // UPDATE
        case UPDATE_VALVE_START:
            return {
                ...state,
                valves: {
                    isFetching: true,
                    error: null,
                }
            };
        case UPDATE_VALVE_SUCCESS:
            return {
                ...state,
                valves: {
                    isFetching: false,
                    error: null,
                    data: [
                        ...state.valves.data.filter(valve => valve.id !== action.payload.id),
                        action.payload
                    ].sort((a, b) => a.id > b.id ? 1 : -1),
                }
            };
        case UPDATE_VALVE_FAILURE:
            return {
                ...state,
                valves: {
                    isFetching: false,
                    error: action.payload,
                }
            };

        // DELETE
        case DELETE_VALVE_START:
            return {
                ...state,
                valves: {
                    isFetching: true,
                    error: null,
                }
            };
        case DELETE_VALVE_SUCCESS:
            return {
                ...state,
                valves: {
                    isFetching: false,
                    error: null,
                    data: state.valves.data.filter(valve => valve.id !== action.payload)
                }
            };
        case DELETE_VALVE_FAILURE:
            return {
                ...state,
                valves: {
                    isFetching: false,
                    error: action.payload,
                }
            };

        default:
            return state;
    }

}