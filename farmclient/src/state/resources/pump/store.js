export default {
    /*
       Should be an array of pump objects, eg:
       [
            {
                id: null, // pump_id
                name: "",
                strategy_id: null,
                farm_id: null, // ?
                // valves: [ valveId1, valveId2, etc ]
                user_id: null
            }
       ]
   */
    data: [],
    isFetching: false,
    error: null
    // byPumpId: {},
    // byFarmId: {},
};