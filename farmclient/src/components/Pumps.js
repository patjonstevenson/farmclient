import React from "react";
import Pump from "./Pump";
import { connect } from "react-redux";

// ({ pumps })
export const Pumps = (props) => {
    console.log("props in Pumps: ", props);
    return (
        <div className="pumps">
            {
                props.pumps
                    ? props.pumps.map(pump => <Pump pump={pump} />)
                    : <h3>Loading Pumps...</h3>
            }
        </div>
    );
}

const mapStateToProps = state => {
    console.log("\nSTATE in pumps:\n", state);
    return ({
        pumps: state.pumps.data
    });
}

export default connect(mapStateToProps)(Pumps);