// IMPORT ACTION TYPES
import {
    // GET
    FETCH_FARM_START,
    FETCH_FARM_SUCCESS,
    FETCH_FARM_FAILURE,

    // ADD
    ADD_FARM_START,
    ADD_FARM_SUCCESS,
    ADD_FARM_FAILURE,

    // PUT
    UPDATE_FARM_START,
    UPDATE_FARM_SUCCESS,
    UPDATE_FARM_FAILURE,

    // DELETE
    DELETE_FARM_START,
    DELETE_FARM_SUCCESS,
    DELETE_FARM_FAILURE
} from "./action-types";
import axiosWithAuth from "../../../requests/axiosWithAuth";

// Can then import Farm from "......farm/functions";
// and do Farm.fetchFarms() etc

// export default {
// GET
// fetchFarms: () => {},
// fetchFarmBy

// ^^^ DO WE EVEN NEED SEPARATE GETs?
// OR WILL WE ALWAYS JUST GET THEM WITH THE REST OF USER DATA, IN BULK?
// JUST GET THEM ALL TOGETHER FOR NOW IN USER FUNCTIONS

// ADD
export const addFarm = farm => async dispatch => {
    dispatch({ type: ADD_FARM_START });
    console.log("STARTING ADD FARM.\nfarm: ", farm);
    if (!farm.user_id) {
        dispatch({
            type: ADD_FARM_FAILURE,
            payload: { message: "user_id required inside object to add farm" }
        })
        return 0;
    }
    try {
        const newFarm = await axiosWithAuth().post("farms", farm);
        console.log(`\n**POST SUCCESS! NEW FARM: **\n${newFarm.data[0]}\n`);
        dispatch({
            type: ADD_FARM_SUCCESS,
            payload: newFarm.data
        });
        return 1;
    } catch (error) {
        dispatch({
            type: ADD_FARM_FAILURE,
            payload: error
        });
        return 0;
    }
};

// PUT
export const updateFarm = (changes, farm_id) => async dispatch => {
    dispatch({ type: UPDATE_FARM_START });
    try {
        const updated = await axiosWithAuth().put(
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
};

// DELETE
export const deleteFarm = (farm_id) => async dispatch => {
    dispatch({ type: DELETE_FARM_START });
    try {
        const deleted_id = await axiosWithAuth().delete(
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
};
