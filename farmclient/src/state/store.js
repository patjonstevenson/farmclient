import userStore from "../resources/user/reducer";
import farmStore from "../resources/farm/reducer";
import strategyStore from "../resources/strategy/reducer";

export default {
    // USER INFO
    users: userStore,
    // FARMS
    farms: farmStore,
    // Strategies
    strategies: strategyStore
};