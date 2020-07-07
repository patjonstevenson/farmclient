// Action function imports
import { updateFarm } from "../../state/resources/farm/actions";
import { updatePump } from "../../state/resources/pump/actions";
import { updateValve } from "../../state/resources/valve/actions";

// TODO:
// Switch exampleObject to an array of property names
// NOTE: Also need to change in UpdaterForm from Object.keys()
// ALSO NEED TO MAKE THE TYPE FOR USER_ID, FARM_ID, AND PUMP_ID A 
// FUNCTION THAT GRABS THOSE IDS FROM THE PARENT COMPONENT

export const FarmUpdaterInfo = {
    name: "farm",
    displayName: "Farm",
    exampleObject: {
        name: "",
        // user_id: "",
        timezone: ""
    },
    types: {
        name: String,
        // user_id: Number,
        timezone: String
    },
    parentIdStrings: [],
    actionFunction: (changes, id) => updateFarm(changes, id) //farm => { console.log("Added a farm!\n", farm); } 
};
export const PumpUpdaterInfo = {
    name: "pump",
    displayName: "Pump",
    exampleObject: {
        name: "",

    },
    types: {
        name: String,

    },
    parentIdStrings: ["farm_id"],
    actionFunction: (changes, id) => updatePump(changes, id) //pump => { console.log("Added a pump!\n", pump); }
};
export const ValveUpdaterInfo = {
    name: "valve",
    displayName: "Valve",
    exampleObject: {
        name: "",

    },
    types: {
        name: String,

    },
    parentIdStrings: ["farm_id", "pump_id"],
    actionFunction: (changes, id) => updateValve(changes, id) //valve => { console.log("Added a valve!\n", valve); }
};