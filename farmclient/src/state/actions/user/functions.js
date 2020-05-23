import axiosWithAuth from "../../../requests/axiosWithAuth";
import axios from "../../../requests/axios";
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
            const id = await axios.post(
                "auth/register",
                user
            );
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: id
            });
        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAILURE,
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
                type: REGISTER_USER_SUCCESS,
                payload: id
            });
        } catch (error) {
            dispatch({
                type: REGISTER_USER_FAILURE,
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