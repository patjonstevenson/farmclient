// IMPORT ACTION TYPES
import {
    // GET
    FETCH_STRATEGY_START,
    FETCH_STRATEGY_SUCCESS,
    FETCH_STRATEGY_FAILURE,

    // POST
    ADD_STRATEGY_START,
    ADD_STRATEGY_SUCCESS,
    ADD_STRATEGY_FAILURE,

    // PUT
    UPDATE_STRATEGY_START,
    UPDATE_STRATEGY_SUCCESS,
    UPDATE_STRATEGY_FAILURE,

    // DELETE
    DELETE_STRATEGY_START,
    DELETE_STRATEGY_SUCCESS,
    DELETE_STRATEGY_FAILURE,
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
export const addStrategy = (strategy) => async dispatch => {
    dispatch({ type: ADD_STRATEGY_START });
    try {
        const newStrategy = await axiosWithAuth().post("strategies", strategy);
        dispatch({
            type: ADD_STRATEGY_SUCCESS,
            payload: newStrategy
        });
    } catch (error) {
        dispatch({
            type: ADD_STRATEGY_FAILURE,
            payload: error
        });
    }
};

// PUT
export const updateStrategy = (changes, strategy_id) => async dispatch => {
    dispatch({ type: UPDATE_STRATEGY_START });
    try {
        const updated = await axiosWithAuth().put(
            `strategies/${strategy_id}`,
            changes
        );
        dispatch({
            type: UPDATE_STRATEGY_SUCCESS,
            payload: updated
        });
    } catch (error) {
        dispatch({
            type: UPDATE_STRATEGY_FAILURE,
            payload: error
        });
    }
}

// DELETE
export const deleteStrategy = (strategy_id) => async dispatch => {
    dispatch({ type: DELETE_STRATEGY_START });
    try {
        const deleted_id = await axiosWithAuth().delete(
            `strategies/${strategy_id}`
        );
        dispatch({
            type: DELETE_STRATEGY_SUCCESS,
            payload: deleted_id
        });
    } catch (error) {
        dispatch({
            type: DELETE_STRATEGY_FAILURE,
            payload: error
        });
    }
}
