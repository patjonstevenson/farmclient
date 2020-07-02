import React, { useState } from "react";
import { connect } from "react-redux";
import AdderForm from "./AdderForm";

export default (config) => {
    const {
        actionFunction
    } = config;

    const mapStateToProps = state => {
        const { parentIdStrings } = config;
        // console.log("PROPS in mapStateToProps in Creator.js:\n", props);
        console.log("STATE in mapStateToProps in Creator.js:\n", state);
        console.log("CONFIG in mapStateToProps in Creator.js:\n", config);
        const parentIds = parentIdStrings.reduce(
            (ids, parentId) => ({ ...ids, [parentId]: state[parentId] }),
            {}
        );
        return ({
            userId: state.user.data.id,
            parentIds
        });
    };


    const PresentationalComponent = (props) => {
        // const { config, actionFunction, ...props } = props;

        // const { actionFunction } = props;
        const {
            name,
            displayName,
            exampleObject,
            types
        } = config;

        const [formVisibility, setFormVisibility] = useState(false);

        const switchFormVisibility = () => {
            setFormVisibility(!formVisibility);
        }

        const handleClick = e => {
            e.preventDefault();
            switchFormVisibility();
        }

        // console.log(`AdderInfo in CreateAdder:\n${AdderInfo}`)
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
                    props={props}
                    config={config}
                    formVisibility={formVisibility}
                    switchFormVisibility={switchFormVisibility}
                // props={{ ...AdderInfo, switchFormVisibility, formVisibility }}
                // props={actionFunction, exampleObject, types, switchFormVisibility}
                />
            </div>
        );
    }

    return connect(mapStateToProps, { actionFunction })(PresentationalComponent);
}