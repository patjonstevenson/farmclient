import React from "react";
import Valve from "./Valve";
import { ValveAdder } from "./Adders";
import { PumpUpdater } from "./Updaters";
import Valves from "./Valves";
import CreateStrategyAssigner from "./StrategyAssigner/CreateStrategyAssigner";

export default props => {
    console.log("\n\t******PROPS IN PUMP.JS:\n", props);
    const { id, name, farm_id } = props.pump;
    const StrategyAssigner = CreateStrategyAssigner(id);
    console.log("****************");
    console.log("PROPS.STRATEGY IN PUMP.JS: ", props.strategy);
    console.log("****************");
    return (
        <div className="pump">
            <h4>{name}</h4>
            <PumpUpdater resource_id={props.pump.id} />
            <h5>Strategy: {props.strategy ? props.strategy.name : "Unassigned"}</h5>
            <StrategyAssigner />
            <div className="valves">
                <h5>Valves</h5>
                <ValveAdder parentIds={{ pump_id: id, farm_id }} />
                <Valves pumpId={id} />
                {/* <button className="add-button">Add Valve</button> */}
                {/* {props.pump.valves.map(valve => <Valve valve={valve} />)} */}
            </div>
        </div>
    );
}