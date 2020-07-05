import React, { useState } from "react";
import { connect } from "react-redux";
import UpdaterForm from "./UpdaterForm";

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

        // console.log(`UpdaterInfo in CreateUpdater:\n${UpdaterInfo}`)
        console.log(`exampleObject in CreateUpdater before being passed to UpdaterForm:\n${exampleObject}`);

        return (
            <div className={`updater ${name}-updater`}>
                <button
                    className={`updater-button ${name}-updater-button`}
                    onClick={handleClick}
                >
                    Edit {displayName}
                </button>
                {formVisibility && <UpdaterForm
                    // derived={derived}
                    props={props}
                    config={config}
                    formVisibility={formVisibility}
                    switchFormVisibility={switchFormVisibility}
                // props={{ ...UpdaterInfo, switchFormVisibility, formVisibility }}
                // props={actionFunction, exampleObject, types, switchFormVisibility}
                />}
            </div>
        );
    }

    return connect(mapStateToProps, { actionFunction })(PresentationalComponent);
}