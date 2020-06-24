export default {
    /*
       Should be an array of valve objects, eg:
       [
            {
                id: null, // valve_id
                name: "",
                pump_id: null,
                farm_id: null
            }
       ]
   */
    // byId: {},
    // byFarmId: {}, // should be an array when there are multiple valves per farm
    // byPumpId: {},
    data: [],
    isFetching: false,
    error: null
};