import axiosWithAuth from "../../../requests/axiosWithAuth";
import axios from "../../../requests/axios";
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

export default {
    registerUser: user => dispatch => {
        dispatch({ type: REGISTER_START });
        try {
            const id = await axios.post(
                "auth/register",
                user
            );
            dispatch({
                type: REGISTER_SUCCESS,
                payload: id
            });
        } catch (error) {
            dispatch({
                type: REGISTER_FAILURE,
                payload: error
            });
        }
    },
    login: credentials => dispatch => {
        dispatch({ type: LOGIN_START });
        try {
            const { token, id } = await axios.post(
                "auth/login",
                credentials
            );
            localStorage.setItem("token", token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: id
            });
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error
            });
        }

    },
    fetchUserData: id => dispatch => {
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
    }
}