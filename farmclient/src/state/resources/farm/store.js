export default {
    /*
       Should be an array of farm objects, eg:
       [
           {
               id: null, // farm_id
               name: "",
               timezone: "",
               pumps: [ pumpId1, pumpId2, etc ]
               valves: [ valveId1, valveId2, etc ]
           }
       ]
   */
    data: [],
    isFetching: false,
    error: null
};