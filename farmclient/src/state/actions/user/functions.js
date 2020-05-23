import axiosWithAuth from "../../../requests/axiosWithAuth";
import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_USER_DATA_START,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAILURE
} from "./types";

export default {
    registerUser: user => dispatch => {
        dispatch({ type: REGISTER_USER_START });
        try {
            const user_id = await axios.post("")
            dispatch({ type: REGISTER_USER_SUCCESS });
        } catch (error) {
            dispatch({ type: REGISTER_USER_FAILURE });
        }
    },
    login: credentials => dispatch => {
        dispatch({ type: LOGIN_START });

    },
    fetchUserData: id => dispatch => {
        dispatch({ type: FETCH_USER_DATA_START });

    }
}