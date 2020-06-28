import userStore from "./resources/user/store";
import farmStore from "./resources/farm/store";
import pumpStore from "./resources/pump/store";
import valveStore from "./resources/valve/store";
import strategyStore from "./resources/strategy/store";
import tacticStore from "./resources/tactic/store";

export default {
    // By Resource
    user: userStore,
    farms: farmStore,
    pumps: pumpStore,
    valves: valveStore,
    strategies: strategyStore,
    tactics: tacticStore,

    // Global
    isFetchingUserData: false,
    errorFetchingUserData: null,
};