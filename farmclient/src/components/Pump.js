import React from "react";
import Valve from "./Valve";
import { ValveAdder } from "./Adders";
import Valves from "./Valves";

export default props => {
    console.log("\n\t******PROPS IN PUMP.JS:\n", props);
    const { id, name, farm_id } = props.pump;
    return (
        <div className="pump">
            <h4>{name}</h4>
            <div className="valves">
                <h5>Valves</h5>
                <ValveAdder parentIds={{ pump_id: id, farm_id: farm_id }} />
                <Valves pumpId={id} />
                {/* <button className="add-button">Add Valve</button> */}
                {/* {props.pump.valves.map(valve => <Valve valve={valve} />)} */}
            </div>
        </div>
    );
}