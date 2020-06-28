// IMPORT ACTION TYPES
import {
    // GET
    // FETCH_PUMP_START,
    // FETCH_PUMP_SUCCESS,
    // FETCH_PUMP_FAILURE,

    // ADD
    ADD_PUMP_START,
    ADD_PUMP_SUCCESS,
    ADD_PUMP_FAILURE,

    // PUT
    UPDATE_PUMP_START,
    UPDATE_PUMP_SUCCESS,
    UPDATE_PUMP_FAILURE,

    // DELETE
    DELETE_PUMP_START,
    DELETE_PUMP_SUCCESS,
    DELETE_PUMP_FAILURE
} from "./action-types";
import axiosWithAuth from "../../requests/axiosWithAuth";

// Can then import Farm from "......farm/functions";
// and do Farm.fetchFarms() etc

export default {
    // GET
    // fetchFarms: () => {},
    // fetchFarmBy

    // ^^^ DO WE EVEN NEED SEPARATE GETs?
    // OR WILL WE ALWAYS JUST GET THEM WITH THE REST OF USER DATA, IN BULK?
    // JUST GET THEM ALL TOGETHER FOR NOW IN USER FUNCTIONS

    // ADD
    addPump: (pump, farm_id) => async dispatch => {
        dispatch({ type: ADD_PUMP_START });
        try {
            const newPump = await axiosWithAuth.post(
                `farms/${farm_id}/pumps`,
                pump
            );
            dispatch({
                type: ADD_PUMP_SUCCESS,
                payload: newPump
            });
        } catch (error) {
            dispatch({
                type: ADD_PUMP_FAILURE,
                payload: error
            });
        }
    },

    // PUT
    updatePump: (changes, farm_id, pump_id) => async dispatch => {
        dispatch({ type: UPDATE_PUMP_START });
        try {
            const updated = await axiosWithAuth.post(
                `farms/${farm_id}/pumps/${pump_id}`,
                changes
            );
            dispatch({
                type: UPDATE_PUMP_SUCCESS,
                payload: updated
            });
        } catch (error) {
            dispatch({
                type: UPDATE_PUMP_FAILURE,
                payload: error
            });
        }
    },

    // DELETE
    deletePump: (pump_id, farm_id) => async dispatch => {
        dispatch({ type: DELETE_PUMP_START });
        try {
            const deleted_id = await axiosWithAuth.delete(
                `farms/${farm_id}/pumps/${pump_id}`
            );
            dispatch({
                type: DELETE_PUMP_SUCCESS,
                payload: deleted_id
            });
        } catch (error) {
            dispatch({
                type: DELETE_PUMP_FAILURE,
                payload: error
            });
        }
    }
}