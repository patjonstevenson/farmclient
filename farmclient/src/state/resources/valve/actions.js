import {
    // GET
    FETCH_VALVE_START,
    FETCH_VALVE_SUCCESS,
    FETCH_VALVE_FAILURE,

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
import axiosWithAuth from "../../../requests/axiosWithAuth";


export const addValve = (valve) => async dispatch => {
    dispatch({ type: ADD_VALVE_START });
    if (!valve.farm_id || !valve.pump_id) {
        dispatch({
            type: ADD_VALVE_FAILURE,
            payload: { message: "farm_id and pump_id required to add valve" }
        });
        return 0;
    }
    try {
        const newValve = await axiosWithAuth().post(
            `valves`,
            valve
        );
        dispatch({
            type: ADD_VALVE_SUCCESS,
            payload: newValve.data
        });
        return 1;
    } catch (error) {
        dispatch({
            type: ADD_VALVE_FAILURE,
            payload: error
        });
        return 0;
    }
};
// export const updateValve = (changes, farm_id, pump_id, valve_id) => async dispatch => {
export const updateValve = (changes, valve_id) => async dispatch => {
    dispatch({ type: UPDATE_VALVE_START });
    try {
        const updated = await axiosWithAuth().put(
            `valves/${valve_id}`,
            changes
        );
        dispatch({
            type: UPDATE_VALVE_SUCCESS,
            payload: updated.data
        });
        return 1;
    } catch (error) {
        dispatch({
            type: UPDATE_VALVE_FAILURE,
            payload: error
        });
        return 0;
    }
};
export const deleteValve = (valve_id, farm_id, pump_id) => async dispatch => {
    dispatch({ type: DELETE_VALVE_START });
    try {
        const deleted_id = await axiosWithAuth().delete(
            `valves/${valve_id}`
        );
        dispatch({
            type: DELETE_VALVE_SUCCESS,
            payload: deleted_id
        });
        return 1;
    } catch (error) {
        dispatch({
            type: DELETE_VALVE_FAILURE,
            payload: error
        });
        return 0;
    }
};
