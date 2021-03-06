import React from "react";
import { FarmUpdater } from "./Updaters";
import Pump from "./Pump";
import { PumpAdder } from "./Adders";
import Pumps from "./Pumps";

export default props => {
    console.log("'farm' in Farm.js:\n", props.farm);
    console.log("'props' in Farm.js:\n", props);
    return (
        <div className="farm">
            <h2>{props.farm.name}</h2>
            <FarmUpdater resource_id={props.farm.id} />
            <div className="pumps">
                <h3> Pumps</h3>
                {/* <button className="add-button">Add Pump</button> */}
                {/* {props.farm.id ? <PumpAdder /> : <></>} */}
                <PumpAdder parentIds={{ farm_id: props.farm.id }} />
                <Pumps farmId={props.farm.id} />
                {/* {props.farm.pumps.map(pump => <Pump pump={pump} />)} */}
            </div>
        </div>
    );
}

