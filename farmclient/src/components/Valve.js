import React from "react";
import { ValveUpdater } from "./Updaters";

export default ({ valve }) => {
    return (
        <div className="valve">
            <h5>{valve.name}</h5>
            <ValveUpdater resource_id={valve.id} />
        </div>
    );
}