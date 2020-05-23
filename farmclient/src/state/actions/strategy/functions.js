// IMPORT ACTION TYPES
import {
    // GET
    FETCH_STRATEGY_START,
    FETCH_STRATEGY_SUCCESS,
    FETCH_STRATEGY_FAILURE,
    FETCH_TACTIC_START,
    FETCH_TACTIC_SUCCESS,
    FETCH_TACTIC_FAILURE,

    // POST
    ADD_STRATEGY_START,
    ADD_STRATEGY_SUCCESS,
    ADD_STRATEGY_FAILURE,
    ADD_TACTIC_START,
    ADD_TACTIC_SUCCESS,
    ADD_TACTIC_FAILURE,

    // PUT
    UPDATE_STRATEGY_START,
    UPDATE_STRATEGY_SUCCESS,
    UPDATE_STRATEGY_FAILURE,
    UPDATE_TACTIC_START,
    UPDATE_TACTIC_SUCCESS,
    UPDATE_TACTIC_FAILURE,

    // DELETE
    DELETE_STRATEGY_START,
    DELETE_STRATEGY_SUCCESS,
    DELETE_STRATEGY_FAILURE,
    DELETE_TACTIC_START,
    DELETE_TACTIC_SUCCESS,
    DELETE_TACTIC_FAILURE
} from "./types";

// Can then import Strategy from "......strategy/functions";
// and do Strategy.fetchStrategies() etc

export default {
    // GET
    // fetchStrategys: () => {},
    // fetchStrategyBy

    // ^^^ DO WE EVEN NEED SEPARATE GETs?
    // OR WILL WE ALWAYS JUST GET THEM WITH THE REST OF USER DATA, IN BULK?
    // JUST GET THEM ALL TOGETHER FOR NOW IN USER FUNCTIONS

    // POST
    addStrategy: (strategy) => async dispatch => {
        dispatch({ type: ADD_STRATEGY_START });
        try {
            const newStrategy = await axiosWithAuth.post("strategies", strategy);
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
    },
    addTactic: (tactic, strategy_id) => async dispatch => {
        dispatch({ type: ADD_TACTIC_START });
        try {
            const newTactic = await axiosWithAuth.post(
                `strategies/${strategy_id}/tactics`,
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
    },

    // PUT
    updateStrategy: (changes, strategy_id) => async dispatch => {
        dispatch({ type: UPDATE_STRATEGY_START });
        try {
            const updated = await axiosWithAuth.put(
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
    },
    updateTactic: (changes, strategy_id, tactic_id) => async dispatch => {
        dispatch({ type: UPDATE_TACTIC_START });
        try {
            const updated = await axiosWithAuth.post(
                `strategies/${strategy_id}/tactics/${tactic_id}`,
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
    },

    // DELETE
    deleteStrategy: (strategy_id) => async dispatch => {
        dispatch({ type: DELETE_STRATEGY_START });
        try {
            const deleted_id = await axiosWithAuth.delete(
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
    },
    deleteTactic: (strategy_id, tactic_id) => async dispatch => {
        dispatch({ type: DELETE_TACTIC_START });
        try {
            const deleted_id = await axiosWithAuth.delete(
                `strategies/${strategy_id}/tactics/${tactic_id}`
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
    },
}