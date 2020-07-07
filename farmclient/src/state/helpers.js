import { pumps } from "./actions";

// export function assignStrategy(pumpId, strategyId) {
//     pumps.updatePump
// }

export function sortById(arr) {
    const copy = Array.isArray(arr) ? arr.slice() : [];
    console.log("COPY: ", copy);
    return copy.sort((a, b) => a.id > b.id ? 1 : -1)
}

export function sortUserData(data) {
    return Object.keys(data).reduce((newObj, key) => ({ ...newObj, [key]: sortById(data[key]) }), {});
}