// TODO:
// Switch exampleObject to an array of property names
// NOTE: Also need to change in AdderForm from Object.keys()

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
    actionFunction: (pump) => { console.log("Added a pump!\n", pump); }
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