import axiosWithAuth from "../../../requests/axiosWithAuth";
import axios from "../../../requests/axios";
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


export const registerUser = user => async dispatch => {
    dispatch({ type: REGISTER_START });
    try {
        const { new_user, token } = await axios.post(
            "auth/register",
            user
        );
        localStorage.setItem("token", token);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: new_user
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error
        });
    }
};
export const login = credentials => async dispatch => {
    dispatch({ type: LOGIN_START });
    try {
        const { token, user } = await axios.post(
            "auth/login",
            credentials
        );
        localStorage.setItem("token", token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                ...user,
                ...credentials.email
            }
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error
        });
    }
};
export const logout = () => async dispatch => {
    dispatch({ type: LOGOUT_START });
    try {
        localStorage.removeItem("token");
        dispatch({
            type: LOGOUT_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: LOGOUT_FAILURE,
            payload: error
        });
    }
}
export const fetchUserData = id => async dispatch => {
    dispatch({ type: FETCH_USER_DATA_START });
    try {
        const userInfo = await axiosWithAuth.get(`users/${id}`);
        dispatch({
            type: FETCH_USER_DATA_SUCCESS,
            payload: userInfo
        });
    } catch (error) {
        dispatch({
            type: FETCH_USER_DATA_FAILURE,
            payload: error
        });
    }
};
