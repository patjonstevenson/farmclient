// Action function imports
import { addFarm } from "../../state/resources/farm/actions";
import { addPump } from "../../state/resources/pump/actions";
import { addValve } from "../../state/resources/valve/actions";
import { addStrategy } from "../../state/resources/strategy/actions";
import { addTactic } from "../../state/resources/tactic/actions";

// TODO:
// Switch exampleObject to an array of property names
// NOTE: Also need to change in AdderForm from Object.keys()
// ALSO NEED TO MAKE THE TYPE FOR USER_ID, FARM_ID, AND PUMP_ID A 
// FUNCTION THAT GRABS THOSE IDS FROM THE PARENT COMPONENT

// export const LoginInfo = {
//     name: "login",
//     displayName: "Login",
//     exampleObject: {
//         name: "",
//         user_id: "",
//         timezone: ""
//     },
//     types: {
//         name: String,
//         user_id: Number,
//         timezone: String
//     },
//     actionFunction: farm => { console.log("Added a farm!\n", farm); } //addFarm
// };
// export const RegisterInfo = {
//     name: "Register",
//     displayName: "Register",
//     exampleObject: {
//         name: "",
//         user_id: "",
//         timezone: ""
//     },
//     types: {
//         name: String,
//         user_id: Number,
//         timezone: String
//     },
//     actionFunction: farm => { console.log("Added a farm!\n", farm); } //addFarm
// };
export const FarmAdderInfo = {
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
    actionFunction: farm => addFarm(farm) //farm => { console.log("Added a farm!\n", farm); } 
};
export const PumpAdderInfo = {
    name: "pump",
    displayName: "Pump",
    exampleObject: {
        name: "",

    },
    types: {
        name: String,

    },
    parentIdStrings: ["farm_id"],
    actionFunction: pump => addPump(pump) //pump => { console.log("Added a pump!\n", pump); }
};
export const ValveAdderInfo = {
    name: "valve",
    displayName: "Valve",
    exampleObject: {
        name: "",

    },
    types: {
        name: String,

    },
    parentIdStrings: ["farm_id", "pump_id"],
    actionFunction: valve => addValve(valve) //valve => { console.log("Added a valve!\n", valve); }
};
export const StrategyAdderInfo = {
    name: "strategy",
    displayName: "Strategy",
    exampleObject: {
        name: "",

    },
    types: {
        name: String,

    },
    parentIdStrings: [],
    actionFunction: strategy => addStrategy(strategy) //valve => { console.log("Added a valve!\n", valve); }
};
export const TacticAdderInfo = {
    name: "tactic",
    displayName: "Tactic",
    exampleObject: {
        name: "",

    },
    types: {
        name: String,

    },
    parentIdStrings: ["strategy_id"],
    actionFunction: tactic => addTactic(tactic) //valve => { console.log("Added a valve!\n", valve); }
};