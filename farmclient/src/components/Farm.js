import React from "react";
import Pump from "./Pump";
import { PumpAdder } from "./Adders";

export default props => {
    console.log("'farm' in Farm.js:\n", props.farm.pumps);
    console.log("'props' in Farm.js:\n", props);
    return (
        <div className="farm">
            <h2>{props.farm.name}</h2>
            <div className="pumps">
                <h3> Pumps</h3>
                {/* <button className="add-button">Add Pump</button> */}
                <PumpAdder />
                {props.farm.pumps.map(pump => <Pump pump={pump} />)}
            </div>
        </div>
    );
}

