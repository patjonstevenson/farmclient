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
import axiosWithAuth from "../../../requests/axiosWithAuth";
import StrategySearch from "../../../components/StrategyAssigner/StrategySearch";

// Can then import Farm from "......farm/functions";
// and do Farm.fetchFarms() etc


// GET
// fetchFarms: () => {},
// fetchFarmBy

// ^^^ DO WE EVEN NEED SEPARATE GETs?
// OR WILL WE ALWAYS JUST GET THEM WITH THE REST OF USER DATA, IN BULK?
// JUST GET THEM ALL TOGETHER FOR NOW IN USER FUNCTIONS

// ADD
export const addPump = pump => async dispatch => {
    dispatch({ type: ADD_PUMP_START });
    if (!pump.user_id) {
        dispatch({
            type: ADD_PUMP_FAILURE,
            payload: { message: "user_id required inside object to add pump" }
        })
        return 0;
    }
    try {
        const newPump = await axiosWithAuth().post(
            `pumps`,
            pump
        );
        dispatch({
            type: ADD_PUMP_SUCCESS,
            payload: newPump.data
        });
        return 1;
    } catch (error) {
        dispatch({
            type: ADD_PUMP_FAILURE,
            payload: error
        });
        console.log(`
            ** Error Adding  Pump **
            Error:
            ${error}
        `);
        console.log("Error: ", error);
        return 0;
    }
};

// PUT
export const updatePump = (changes, pump_id) => async dispatch => {
    dispatch({ type: UPDATE_PUMP_START });
    console.log("In updatePump");
    try {
        const updated = await axiosWithAuth().put(
            `pumps/${pump_id}`,
            changes
        );
        dispatch({
            type: UPDATE_PUMP_SUCCESS,
            payload: updated.data
        });
        return 1;
    } catch (error) {
        dispatch({
            type: UPDATE_PUMP_FAILURE,
            payload: error
        });
        return 0;
    }
};

// DELETE
export const deletePump = (pump_id) => async dispatch => {
    dispatch({ type: DELETE_PUMP_START });
    try {
        const deleted_id = await axiosWithAuth().delete(
            `pumps/${pump_id}`
        );
        dispatch({
            type: DELETE_PUMP_SUCCESS,
            payload: deleted_id
        });
        return 1;
    } catch (error) {
        dispatch({
            type: DELETE_PUMP_FAILURE,
            payload: error
        });
        return 0;
    }
};

// ASSIGN STRATEGY TO PUMP
export const assignStrategy = (pump_id, strategy_id) => dispatch => {
    console.log("MADE IT INTO ASSIGNSTRATEGY");
    try {
        const successful = updatePump({ strategy_id }, pump_id);
        if (!successful) {
            console.log("* ERROR ASSIGNING STRATEGY");
            return 0;
        }
        console.log("* STRATEGY ASSIGNED SUCCESSFULLY!")
        return 1;
    } catch (error) {
        console.log("* ERROR ASSIGNING STRATEGY");
        console.log("ERROR: ", error);
        return 0;
    }

}
