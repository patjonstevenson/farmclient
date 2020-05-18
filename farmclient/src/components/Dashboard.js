import React from "react";
import Farm from "./Farm";
import { FarmAdder } from "./Adders";

export default props => {
    console.log("'farms' in Dashboard.js", props.farms);
    console.log("'farms[0]' in Dashboard.js", props.farms[0]);
    // props.farms.forEach(element => {
    //     console.log("Element: ", element);
    // });
    return (
        <div className="dashboard">
            <h1>Farms</h1>
            <FarmAdder />
            {/* <button className="add-button">Add Farm</button> */}
            <div className="farms">
                {props.farms.map(farm => <Farm farm={farm} />)}
            </div>
        </div>
    );
}   