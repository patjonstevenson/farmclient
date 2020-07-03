import React from "react";
import { connect } from "react-redux";
import { assignStrategy } from "../../state/resources/pump/actions";

export default props => {
    const {
        result,
        assign
    } = props;

    const handleClick = e => {
        e.preventDefault();
        if (result) {
            assign(result.id);
        }
    };

    return (
        <div className="search-result">
            {result && <button onClick={handleClick}>{result.name}</button>}
        </div>
    )
};

// const mapStateToProps = state => {
//     return ({

//     });
// }

// export default connect(mapStateToProps, {assignStrategy})(Result);