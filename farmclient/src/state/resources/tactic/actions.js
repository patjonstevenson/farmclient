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