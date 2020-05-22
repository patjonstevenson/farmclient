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
    POST_STRATEGY_START,
    POST_STRATEGY_SUCCESS,
    POST_STRATEGY_FAILURE,
    POST_TACTIC_START,
    POST_TACTIC_SUCCESS,
    POST_TACTIC_FAILURE,

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
    postStrategy: (strategy) => dispatch => { },
    postTactic: (tactic) => dispatch => { },

    // PUT
    putStrategy: (strategy) => dispatch => { },
    putTactic: (tactic) => dispatch => { },

    // DELETE
    putStrategy: (strategy) => dispatch => { },
    putTactic: (tactic) => dispatch => { },
}