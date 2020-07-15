import CreateAdder from "./OldCreateAdder";
import Creator from "./CreateAdder";
// import AdderRegistry from "./AdderRegistry";
import { FarmAdderInfo, PumpAdderInfo, ValveAdderInfo } from "./AdderRegistry";

export const FarmAdder = Creator(FarmAdderInfo);
export const ValveAdder = Creator(ValveAdderInfo);
export const PumpAdder = (() => {
    console.log("PumpAdderInfo at time of PumpAdder's creation:\n", PumpAdderInfo);
    return Creator(PumpAdderInfo);
})();