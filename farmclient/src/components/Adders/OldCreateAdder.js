import React, { useState } from "react";
import AdderForm from "./AdderForm";
import { connect } from "react-redux";

// !!!!! WHAT IS DERIVED??? !!!!!
// export default (AdderInfo, derived) => () => {
export default (AdderInfo) => () => {
    const {
        name,
        displayName,
        exampleObject,
        types,
        actionFunction
    } = AdderInfo;

    const [formVisibility, setFormVisibility] = useState(false);

    const switchFormVisibility = () => {
        setFormVisibility(!formVisibility);
    }

    const handleClick = e => {
        e.preventDefault();
        switchFormVisibility();
    }

    console.log(`AdderInfo in CreateAdder:\n${AdderInfo}`)
    console.log(`exampleObject in CreateAdder before being passed to AdderForm:\n${exampleObject}`);

    return (
        <div className={`adder ${name}-adder`}>
            <button
                className={`adder-button ${name}-adder-button`}
                onClick={handleClick}
            >
                Add {displayName}
            </button>
            <AdderForm
                // derived={derived}
                props={{ ...AdderInfo, formVisibility, switchFormVisibility }}
            // props={actionFunction, exampleObject, types, switchFormVisibility}
            />
        </div>
    );
}
