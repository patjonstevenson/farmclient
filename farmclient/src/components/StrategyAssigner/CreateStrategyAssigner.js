import React, { useState } from "react";
import { connect } from "react-redux";

// Presentational Components
import Search from "./StrategySearch";

// Action Function
import { assignStrategy } from "../../state/resources/pump/actions";
import { updatePump } from "../../state/resources/pump/actions";

export default (pump_id) => {
    const [assigning, setAssigning] = useState(false);
    const switchAssigning = () => { setAssigning(!assigning); };

    const mapStateToProps = state => {
        return ({
            strategies: state.strategies.data
        });
    };

    // const assign = async strategy_id => {
    //     console.log("RUNNING ASSIGN");
    //     console.log("strategy_id: ", strategy_id);
    //     console.log("pump_id: ", pump_id);
    //     await assignStrategy(pump_id, strategy_id);
    // }

    const PresentationalComponent = props => {
        return (
            <div className="strategy-assigner">
                <button onClick={switchAssigning}>Assign Strategy</button>
                {assigning && <Search strategies={props.strategies} updatePump={props.updatePump} pump_id={pump_id} />}
            </div>
        );
    }

    return connect(mapStateToProps, { assignStrategy, updatePump })(PresentationalComponent)
}