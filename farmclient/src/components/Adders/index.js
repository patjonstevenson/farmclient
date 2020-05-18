import CreateAdder from "./CreateAdder";
// import AdderRegistry from "./AdderRegistry";
import { FarmAdderInfo, PumpAdderInfo, ValveAdderInfo } from "./AdderRegistry";

export const FarmAdder = CreateAdder(FarmAdderInfo);
export const ValveAdder = CreateAdder(ValveAdderInfo);
export const PumpAdder = (() => {
    console.log("PumpAdderInfo at time of PumpAdder's creation:\n", PumpAdderInfo);
    return CreateAdder(PumpAdderInfo);
})()