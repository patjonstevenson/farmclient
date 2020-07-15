import React, { useState } from "react";
import { connect } from "react-redux";
import AdderForm from "./AdderForm";

export default (config) => {
    const {
        actionFunction,
        name
    } = config;

    const mapStateToProps = state => {
        const { parentIdStrings } = config;
        // console.log("PROPS in mapStateToProps in Creator.js:\n", props);
        console.log("STATE in mapStateToProps in Creator.js:\n", state);
        console.log("CONFIG in mapStateToProps in Creator.js:\n", config);
        // const parentIds = parentIdStrings.reduce(
        //     (ids, parentId) => ({ ...ids, [parentId]: state[`${name}s`][data].find(p => p.id === )[parentId] }),
        //     {}
        // );
        // console.log(`
        //     parentIds in mapStateToProps in Creator.js:
        //     ${parentIds}
        //     keys: ${Object.keys(parentIds)}
        // `);
        // console.log("parentIds: ", parentIds);
        return ({
            user_id: state.user.data.id,
            // parentIds
        });
    };


    const PresentationalComponent = (props) => {
        // const { config, actionFunction, ...props } = props;

        // const { actionFunction } = props;
        // const { parentIds } = props;
        const {
            name,
            displayName,
            exampleObject,
            types
        } = config; // Through closure

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
                    {formVisibility ? "Cancel" : `Add ${displayName}`}
                </button>
                {formVisibility && <AdderForm
                    // derived={derived}
                    props={props}
                    config={config}
                    formVisibility={formVisibility}
                    switchFormVisibility={switchFormVisibility}
                // props={{ ...AdderInfo, switchFormVisibility, formVisibility }}
                // props={actionFunction, exampleObject, types, switchFormVisibility}
                />}
            </div>
        );
    }

    return connect(mapStateToProps, { actionFunction })(PresentationalComponent);
}