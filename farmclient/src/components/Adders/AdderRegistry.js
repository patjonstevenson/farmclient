export const FarmAdderInfo = {
    name: "farm",
    displayName: "Farm",
    exampleObject: {
        name: "",
        user_id: "",
        timezone: ""
    },
    types: {
        name: String,
        user_id: Number,
        timezone: String
    },
    actionFunction: () => { console.log("Added a farm!"); }
};
export const PumpAdderInfo = {
    name: "pump",
    displayName: "Pump",
    exampleObject: {
        name: "",
        farm_id: ""
    },
    types: {
        name: String,
        farm_id: Number
    },
    actionFunction: () => { console.log("Added a pump!"); }
};
export const ValveAdderInfo = {
    name: "valve",
    displayName: "Valve",
    exampleObject: {
        name: "",
        pump_id: ""
    },
    types: {
        name: String,
        pump_id: Number
    },
    actionFunction: () => { console.log("Added a valve!"); }
}