import User from "./resources/user/actions";
import Farm from "./resources/farm/actions";
import Strategy from "./resources/strategy/actions";

export default {
    ...User,
    ...Farm,
    ...Strategy
};