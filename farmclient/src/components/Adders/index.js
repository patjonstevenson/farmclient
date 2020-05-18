import CreateAdder from "./CreateAdder";
// import AdderRegistry from "./AdderRegistry";
import { FarmAdderInfo, PumpAdderInfo } from "./AdderRegistry";

// export const FarmAdder = CreateAdder(FarmAdderInfo);
// export const ValveAdder = CreateAdder(AdderRegistry.ValveAdderInfo);
export const PumpAdder = (() => {
    console.log("PumpAdderInfo at time of PumpAdder's creation:\n", PumpAdderInfo);
    return CreateAdder(PumpAdderInfo);
})()