// Action function imports
import { addFarm } from "../../state/resources/farm/actions";
import { addPump } from "../../state/resources/pump/actions";
import { addValve } from "../../state/resources/valve/actions";

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
        user_id: "",
        timezone: ""
    },
    types: {
        name: String,
        user_id: Number,
        timezone: String
    },
    actionFunction: addFarm //farm => { console.log("Added a farm!\n", farm); }
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
    actionFunction: addPump //pump => { console.log("Added a pump!\n", pump); }
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
    actionFunction: addValve //valve => { console.log("Added a valve!\n", valve); }
};