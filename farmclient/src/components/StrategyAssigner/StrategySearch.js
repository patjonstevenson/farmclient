import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

export default ({ assignStrategy, pump_id, strategies }) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="search strategy-search">
            <SearchInput setSearchTerm={setSearchTerm} />
            <SearchResults results={strategies.filter(s => s.name.includes(searchTerm))} />
        </div>
    );
}