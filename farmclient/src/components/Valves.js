import React from "react";
import Valve from "./Valve";
import { connect } from "react-redux";

// ({ valves })
export const Valves = props => {
    console.log("props in Valves: ", props);
    return (
        <div className="valves">
            {
                props.valves
                    ? props.valves.map(valve => <Valve valve={valve} />)
                    : <h3>Loading Valves...</h3>
            }
        </div>
    );
}

const mapStateToProps = state => {
    console.log("\nSTATE:\n", state);
    return ({
        valves: state.valves.data
    });
}

export default connect(mapStateToProps)(Valves);