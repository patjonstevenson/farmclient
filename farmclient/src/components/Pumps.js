import React from "react";
import Pump from "./Pump";
import { connect } from "react-redux";

// ({ pumps })
const Pumps = props => {
    console.log("props in Pumps: ", props);
    const pumps = props.pumps.filter(pump => pump.farm_id === props.farmId)
    return (
        <div className="pumps">
            {
                pumps
                    ? pumps.map(pump => <Pump pump={pump} strategy={props.strategies[pump.id]} />)
                    : <h3>Loading Pumps...</h3>
            }
        </div>
    );
}

const mapStateToProps = state => {
    console.log("\nSTATE in pumps:\n", state);
    return ({
        pumps: state.pumps.data ? state.pumps.data : [],
        strategies: state.pumps.data.reduce((strategies, p) => ({
            ...strategies,
            [p.id]: state.strategies.data.find(s => s.id === p.strategy_id)
        }), {})
    });
}

export default connect(mapStateToProps, {})(Pumps);