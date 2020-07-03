import React from "react";

export default ({ searchTerm, setSearchTerm }) => {
    const handleChanges = e => {
        setSearchTerm(e.target.value);
    }
    return (
        <div className="search-input">
            <input value={searchTerm} onChange={handleChanges} />
        </div>
    )
};