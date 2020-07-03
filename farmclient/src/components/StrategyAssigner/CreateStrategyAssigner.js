import React, { useState } from "react";
import { connect } from "react-redux";

// Presentational Components
import Search from "./StrategySearch";

// Action Function
import assignStrategy from "../../state/resources/pump/actions";

export default ({ pump_id }) => {
    const [assigning, setAssigning] = useState(false);
    const switchAssigning = () => { setAssigning(!assigning); };

    const mapStateToProps = state => {
        return ({});
    };

    const PresentationalComponent = props => {
        return (
            <div className="strategy-assigner">
                <button onClick={switchAssigning}>Assign Strategy</button>
                {assigning && <Search assignStrategy={assignStrategy} pump_id={pump_id} />}
            </div>
        );
    }

    return connect(mapStateToProps, { assignStrategy })(PresentationalComponent)
}