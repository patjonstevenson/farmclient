import React from "react";
import Valve from "./Valve";

export default props => {
    return (
        <div className="pump">
            <h4>{props.pump.name}</h4>
            <div className="valves">
                <h5>Valves</h5>
                <button className="add-button">Add Valve</button>
                {props.pump.valves.map(valve => <Valve valve={valve} />)}
            </div>
        </div>
    );
}