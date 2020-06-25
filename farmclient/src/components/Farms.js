import React from "react";
import Farm from "./Farm";
import { connect } from "react-redux";

// ({ farms })
export const Farms = props => {
    return (
        <div className="farms">
            {
                props.farms.map(farm => <Farm farm={farm} />)
            }
        </div>
    );
}

const mapStateToProps = state => ({
    farms: state.farms.data
});

export default connect(mapStateToProps)(Farms);