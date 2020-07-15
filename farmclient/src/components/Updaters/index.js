import CreateUpdater from "./CreateUpdater";
import Creator from "./CreateUpdater";
// import UpdaterRegistry from "./UpdaterRegistry";
import { FarmUpdaterInfo, PumpUpdaterInfo, ValveUpdaterInfo } from "./UpdaterRegistry";

export const FarmUpdater = Creator(FarmUpdaterInfo);
export const ValveUpdater = Creator(ValveUpdaterInfo);
export const PumpUpdater = (() => {
    console.log("PumpUpdaterInfo at time of PumpUpdater's creation:\n", PumpUpdaterInfo);
    return Creator(PumpUpdaterInfo);
})();