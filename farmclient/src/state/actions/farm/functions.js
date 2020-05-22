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

    // POST
    POST_FARM_START,
    POST_FARM_SUCCESS,
    POST_FARM_FAILURE,
    POST_PUMP_START,
    POST_PUMP_SUCCESS,
    POST_PUMP_FAILURE,
    POST_VALVE_START,
    POST_VALVE_SUCCESS,
    POST_VALVE_FAILURE,

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

// Can then import Farm from "......farm/functions";
// and do Farm.fetchFarms() etc

export default {
    // GET
    // fetchFarms: () => {},
    // fetchFarmBy

    // ^^^ DO WE EVEN NEED SEPARATE GETs?
    // OR WILL WE ALWAYS JUST GET THEM WITH THE REST OF USER DATA, IN BULK?
    // JUST GET THEM ALL TOGETHER FOR NOW IN USER FUNCTIONS

    // POST
    postFarm: (farm) => dispatch => {
        axios
    },
    postPump: (pump) => dispatch => { },
    postValve: (valve) => dispatch => { },

    // PUT
    putFarm: (farm) => dispatch => { },
    putPump: (pump) => dispatch => { },
    putValve: (valve) => dispatch => { },

    // DELETE
    putFarm: (farm) => dispatch => { },
    putPump: (pump) => dispatch => { },
    putValve: (valve) => dispatch => { },
}