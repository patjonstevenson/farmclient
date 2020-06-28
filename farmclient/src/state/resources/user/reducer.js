import initialStore from "./store";
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_START,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FETCH_USER_DATA_START,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE
} from "./action-types";

export default (state = initialStore, action) => {
    // For logs
    console.log("\nUser reducer running.");
    console.log("Action: ", action.type);
    console.log("Payload: ", action.payload);

    switch (action.type) {
        // REGISTER
        case REGISTER_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.payload,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }

        // LOGIN
        case LOGIN_START:
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        // LOGOUT
        case LOGOUT_START:
            return {
                ...state,
                isLoggingOut: true,
                errorLoggingOut: null
            };
        case LOGOUT_SUCCESS:
            return initialStore;
        case LOGOUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
                errorLoggingOut: action.payload
            };

        // FETCH USER DATA (CALLED IN DASHBOARD)
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
                data: action.payload.user,
            };
        case FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        default:
            return state;
    }
}