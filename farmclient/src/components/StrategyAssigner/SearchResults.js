import React from "react";
import SearchResult from "./SearchResult";

export default (props) => {
    const {
        results
    } = props;
    return (
        <div className="search-results">
            {results.map(result => <SearchResult result={result} />)}
        </div>
    )
};