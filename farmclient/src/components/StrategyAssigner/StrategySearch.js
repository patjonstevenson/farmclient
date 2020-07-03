import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { updateFarm } from "../../state/resources/farm/actions";

export default ({ assignStrategy, updatePump, pump_id, strategies }) => {
    const [searchTerm, setSearchTerm] = useState("");
    console.log("Strategies: ", strategies);

    const assign = async strategy_id => {
        console.log("RUNNING ASSIGN");
        console.log("strategy_id: ", strategy_id);
        console.log("pump_id: ", pump_id);
        console.log("updatePump: ", updatePump)
        await updatePump({ strategy_id }, pump_id);
    }

    return (
        <div className="search strategy-search">
            <SearchInput setSearchTerm={setSearchTerm} />
            <SearchResults assign={assign} results={strategies.filter(s => s.name.includes(searchTerm))} />
        </div>
    );
}