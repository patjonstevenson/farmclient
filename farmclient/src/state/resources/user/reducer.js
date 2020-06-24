import initialStore from "../store";
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_USER_DATA_START,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE
} from "./action-types";

export default (state = initialStore, action) => {
    // For logs
    console.log("\nReducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {
        // REGISTER
        case REGISTER_START:
            return {
                ...state,
                user: {
                    isFetching: true,
                    error: null,
                }
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: {
                    isFetching: false,
                    error: null,
                    data: action.payload,
                }
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                user: {
                    isFetching: false,
                    error: action.payload,
                }
            }

        // UPDATE
        case LOGIN_START:
            return {
                ...state,
                user: {
                    isFetching: true,
                    error: null,
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    isFetching: false,
                    error: null,
                    data: action.payload
                }
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                user: {
                    isFetching: false,
                    error: action.payload,
                }
            };

        // DELETE
        case DELETE_FARM_START:
            return {
                ...state,
                farms: {
                    isFetching: true,
                    error: null,
                }
            };
        case DELETE_FARM_SUCCESS:
            return {
                ...state,
                farms: {
                    isFetching: false,
                    error: null,
                    data: state.farms.data.filter(farm => farm.id !== action.payload)
                }
            };
        case DELETE_FARM_FAILURE:
            return {
                ...state,
                farms: {
                    isFetching: false,
                    error: action.payload,
                }
            };

        default:
            return state;
    }

}