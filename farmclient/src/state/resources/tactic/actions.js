// IMPORT ACTION TYPES
import {
    // GET
    // FETCH_TACTIC_START,
    // FETCH_TACTIC_SUCCESS,
    // FETCH_TACTIC_FAILURE,

    // POST
    ADD_TACTIC_START,
    ADD_TACTIC_SUCCESS,
    ADD_TACTIC_FAILURE,

    // PUT
    UPDATE_TACTIC_START,
    UPDATE_TACTIC_SUCCESS,
    UPDATE_TACTIC_FAILURE,

    // DELETE
    DELETE_TACTIC_START,
    DELETE_TACTIC_SUCCESS,
    DELETE_TACTIC_FAILURE
} from "./action-types";
import axiosWithAuth from "../../../requests/axiosWithAuth";
// Can then import Strategy from "......strategy/functions";
// and do Strategy.fetchStrategies() etc


// GET
// fetchStrategys: () => {},
// fetchStrategyBy

// ^^^ DO WE EVEN NEED SEPARATE GETs?
// OR WILL WE ALWAYS JUST GET THEM WITH THE REST OF USER DATA, IN BULK?
// JUST GET THEM ALL TOGETHER FOR NOW IN USER FUNCTIONS

// POST
export const addTactic = (tactic, strategy_id) => async dispatch => {
    dispatch({ type: ADD_TACTIC_START });
    try {
        const newTactic = await axiosWithAuth().post(
            `tactics`,
            tactic
        );
        dispatch({
            type: ADD_TACTIC_SUCCESS,
            payload: newTactic
        });
    } catch (error) {
        dispatch({
            type: ADD_TACTIC_FAILURE,
            payload: error
        });
    }
};

// PUT
export const updateTactic = (changes, strategy_id, tactic_id) => async dispatch => {
    dispatch({ type: UPDATE_TACTIC_START });
    try {
        const updated = await axiosWithAuth().post(
            `tactics/${tactic_id}`,
            changes
        );
        dispatch({
            type: UPDATE_TACTIC_SUCCESS,
            payload: updated
        });
    } catch (error) {
        dispatch({
            type: UPDATE_TACTIC_FAILURE,
            payload: error
        });
    }
};

// DELETE
export const deleteTactic = (strategy_id, tactic_id) => async dispatch => {
    dispatch({ type: DELETE_TACTIC_START });
    try {
        const deleted_id = await axiosWithAuth().delete(
            `tactics/${tactic_id}`
        );
        dispatch({
            type: DELETE_TACTIC_SUCCESS,
            payload: deleted_id
        });
    } catch (error) {
        dispatch({
            type: DELETE_TACTIC_FAILURE,
            payload: error
        });
    }
};
