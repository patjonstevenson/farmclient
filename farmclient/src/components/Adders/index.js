import CreateAdder from "./CreateAdder";
import Creator from "./Creator";
// import AdderRegistry from "./AdderRegistry";
import { FarmAdderInfo, PumpAdderInfo, ValveAdderInfo } from "./AdderRegistry";

export const FarmAdder = Creator(FarmAdderInfo);
export const ValveAdder = CreateAdder(ValveAdderInfo);
export const PumpAdder = (() => {
    console.log("PumpAdderInfo at time of PumpAdder's creation:\n", PumpAdderInfo);
    return CreateAdder(PumpAdderInfo);
})();