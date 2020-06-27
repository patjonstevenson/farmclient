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
import axiosWithAuth from "../../requests/axiosWithAuth";

export default {
    addValve: (valve, farm_id, pump_id) => async dispatch => {
        dispatch({ type: ADD_VALVE_START });
        try {
            const newValve = await axiosWithAuth.post(
                `farms/${farm_id}/pumps/${pump_id}/valves`,
                valve
            );
            dispatch({
                type: ADD_VALVE_SUCCESS,
                payload: newValve
            });
        } catch (error) {
            dispatch({
                type: ADD_VALVE_FAILURE,
                payload: error
            });
        }
    },
    updateValve: (changes, farm_id, pump_id, valve_id) => async dispatch => {
        dispatch({ type: UPDATE_VALVE_START });
        try {
            const updated = await axiosWithAuth.post(
                `farms/${farm_id}/pumps/${pump_id}/valves/${valve_id}`,
                changes
            );
            dispatch({
                type: UPDATE_VALVE_SUCCESS,
                payload: updated
            });
        } catch (error) {
            dispatch({
                type: UPDATE_VALVE_FAILURE,
                payload: error
            });
        }
    },
    deleteValve: (valve_id, farm_id, pump_id) => async dispatch => {
        dispatch({ type: DELETE_VALVE_START });
        try {
            const deleted_id = await axiosWithAuth.delete(
                `farms/${farm_id}/pumps/${pump_id}/valves/${valve_id}`
            );
            dispatch({
                type: DELETE_VALVE_SUCCESS,
                payload: deleted_id
            });
        } catch (error) {
            dispatch({
                type: DELETE_VALVE_FAILURE,
                payload: error
            });
        }
    },
}