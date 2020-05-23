// IMPORT ACTION TYPES
import {
    // GET
    FETCH_FARM_START,
    FETCH_FARM_SUCCESS,
    FETCH_FARM_FAILURE,
    FETCH_PUMP_START,
    FETCH_PUMP_SUCCESS,
    FETCH_PUMP_FAILURE,
    FETCH_VALVE_START,
    FETCH_VALVE_SUCCESS,
    FETCH_VALVE_FAILURE,

    // ADD
    ADD_FARM_START,
    ADD_FARM_SUCCESS,
    ADD_FARM_FAILURE,
    ADD_PUMP_START,
    ADD_PUMP_SUCCESS,
    ADD_PUMP_FAILURE,
    ADD_VALVE_START,
    ADD_VALVE_SUCCESS,
    ADD_VALVE_FAILURE,

    // PUT
    UPDATE_FARM_START,
    UPDATE_FARM_SUCCESS,
    UPDATE_FARM_FAILURE,
    UPDATE_PUMP_START,
    UPDATE_PUMP_SUCCESS,
    UPDATE_PUMP_FAILURE,
    UPDATE_VALVE_START,
    UPDATE_VALVE_SUCCESS,
    UPDATE_VALVE_FAILURE,

    // DELETE
    DELETE_FARM_START,
    DELETE_FARM_SUCCESS,
    DELETE_FARM_FAILURE,
    DELETE_PUMP_START,
    DELETE_PUMP_SUCCESS,
    DELETE_PUMP_FAILURE,
    DELETE_VALVE_START,
    DELETE_VALVE_SUCCESS,
    DELETE_VALVE_FAILURE
} from "./types";
import axiosWithAuth from "../../../requests/axiosWithAuth";

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
    addFarm: (farm) => async dispatch => {
        dispatch({ type: ADD_FARM_START });
        try {
            const newFarm = await axiosWithAuth.post("farms", farm);
            dispatch({
                type: ADD_FARM_SUCCESS,
                payload: newFarm
            });
        } catch (error) {
            dispatch({
                type: ADD_FARM_FAILURE,
                payload: error
            });
        }
    },
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

    // PUT
    updateFarm: (changes, farm_id) => async dispatch => {
        dispatch({ type: UPDATE_FARM_START });
        try {
            const updated = await axiosWithAuth.put(
                `farms/${farm_id}`,
                changes
            );
            dispatch({
                type: UPDATE_FARM_SUCCESS,
                payload: updated
            });
        } catch (error) {
            dispatch({
                type: UPDATE_FARM_FAILURE,
                payload: error
            });
        }
    },
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

    // DELETE
    deleteFarm: (farm_id) => async dispatch => {
        dispatch({ type: DELETE_FARM_START });
        try {
            const deleted_id = await axiosWithAuth.delete(
                `farms/${farm_id}`
            );
            dispatch({
                type: DELETE_FARM_SUCCESS,
                payload: deleted_id
            });
        } catch (error) {
            dispatch({
                type: DELETE_FARM_FAILURE,
                payload: error
            });
        }
    },
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