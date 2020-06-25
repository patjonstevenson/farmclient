import React from "react";
import Farm from "./Farm";
import Farms from "./Farms";
import { FarmAdder } from "./Adders";

export default props => {
    console.log("'farms' in Dashboard.js", props.farms);
    console.log("'farms[0]' in Dashboard.js", props.farms[0]);
    // props.farms.forEach(element => {
    //     console.log("Element: ", element);
    // });
    const user_id = 0;

    // FETCH USER DATA

    return (
        <div className="dashboard">
            <h1>Farms</h1>
            <FarmAdder derived={{ user_id: props.user_id }} />
            {/* <button className="add-button">Add Farm</button> */}
            <div className="farms">
                <Farms />
                {props.farms.map(farm => <Farm user_id={0} farm={farm} />)}
            </div>
        </div>
    );
}   