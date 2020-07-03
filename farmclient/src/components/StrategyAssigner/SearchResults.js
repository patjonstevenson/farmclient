import React from "react";
import SearchResult from "./SearchResult";

export default (props) => {
    const {
        results,
        assign
    } = props;
    return (
        <div className="search-results">
            {results.map(result => <SearchResult assign={assign} result={result} />)}

        </div>
    )
};