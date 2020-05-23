import userStore from 

export default {
    // USER INFO
    user: {
        id: null,
        first_name: "",
        last_name: "",
        email: ""
    },

    // FARMS
    /*
        Should be an array of farm objects, eg:
        [
            {
                id: null, // farm_id
                name: "",
                timezone: "",
                pumps: [
                    {
                        id: null, // pump_id
                        name: "",
                        strategy: null // strategy_id,
                        valves: [
                            {
                                id: null, // valve_id
                                name: ""
                            }
                        ]
                    }
                ]
            }
        ]
    */
    farms: [],

    // Strategies
    /*
        Should be an array of strategy objects, eg:
        [
            {
                id: null // strategy_id
                name: "",
                tactics: [
                    {
                        id: null,
                        time: "",
                        humidity_high: null,
                        dryback: null
                    }
                ]
            }
        ]
    */
    strategies: []
}