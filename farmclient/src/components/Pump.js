import React from "react";
import Valve from "./Valve";
import { ValveAdder } from "./Adders";
import { Valves } from "./Valves";

export default props => {
    return (
        <div className="pump">
            <h4>{props.pump.name}</h4>
            <div className="valves">
                <h5>Valves</h5>
                <ValveAdder />
                {/* <button className="add-button">Add Valve</button> */}
                <Valves />
                {/* {props.pump.valves.map(valve => <Valve valve={valve} />)} */}
            </div>
        </div>
    );
}