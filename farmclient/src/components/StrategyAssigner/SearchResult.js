import React from "react";

export default (props) => {
    const {
        result,
        setSelection
    } = props
    return (
        <div
            className="search-result"
            onClick={setSelection}
        >
            <h3>{result.name}</h3>
        </div>
    )
};