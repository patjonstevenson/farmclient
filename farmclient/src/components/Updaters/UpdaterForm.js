import React, { useState, useEffect } from "react";

export default ({ config, formVisibility, switchFormVisibility, props }) => {
    // TODO:
    // we need to know the following:

    //      what are the fields the form needs?
    //      => pass an empty object with the correct attributes
    //      => use object as starter in useState and also
    //      => use Object.keys(exampleObject) to generate form fields

    //      what to do on submit?
    //      => receive actionFunction

    const {
        // actionFunction,
        exampleObject,
        types,
        // parentIds
    } = config;

    const { resource_id } = props;

    const user_id = Number(localStorage.getItem("user_id")
        ? localStorage.getItem("user_id")
        : props.user_id
            ? props.user_id
            : null);

    console.log("props: ", props);
    console.log("user_id: ", user_id);
    console.log("resource_id: ", resource_id);

    const [changes, setChanges] = useState(exampleObject);

    // 1 if attempt successful
    // 0 if no attempt made yet
    // -1 if attempt failed
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        console.log(`\nATTEMPT: ${attempt}\n`);
    }, [attempt]);

    const handleChanges = property => e => {
        setChanges({
            ...changes,
            [property]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        try {
            // Coerce the types
            for (let property in changes) {
                setChanges({
                    ...changes,
                    [property]: types[property](changes[property])
                });
            }

            // Only send fields that actually are filled out
            // We don't want to erase all the fields not being updated
            const onlyTheRealChanges = Object.keys(changes).reduce(
                (acc, curr) => changes[curr]
                    ? { ...acc, [curr]: changes[curr] }
                    : acc,
                {}
            );


            // Just logging for now
            console.log("\n**Calling actionFunction with\n"); // removed  ...props.parentIds,
            console.log("changes: ", onlyTheRealChanges);
            console.log("resource id: ", resource_id); // should be {resource_id: #}
            console.log("\nAction Function: ", props.actionFunction);
            console.log("props in UpdaterForm right before actionFunction call: ", props);
            console.log("props.resource_id in UpdaterForm right before actionFunction call: ", props.resource_id);

            const r = props.resource_id;
            console.log("r: ", r);

            // Send form object to the server
            const successful = props.actionFunction(onlyTheRealChanges,
                // Using this function call to log r in the moment of the call)
                (() => { console.log("typeof r in call to actionFunction: ", typeof r); return r; })()
            );

            if (!successful) {
                setAttempt(-1)
            } else {
                // Make form go away
                switchFormVisibility();
                // Reset form
                setChanges(exampleObject);
                setAttempt(1);
            }
        } catch (error) {
            // console.log(`\nERROR coercing type ${typeof changes[property]} to ${types[property]}`);
            // console.log(`Occurred for property ${property}`);
            console.log(`\nERROR in handleSubmit in UpdaterForm\n${error}\n`);
            console.log("changes:\n", changes);
            setAttempt(-1);
        }
    };
    console.log("props in UpdaterForm: ", props);
    console.log("exampleObject in UpdaterForm: ", exampleObject);

    return (
        // formVisibility used in class for { display: none } is deprecated in this codebase
        // stick to && for conditional render
        <div className={`updater-form-${
            formVisibility
                ? "visible"
                : "invisible"
            }`}
        >
            {/* Could add an error message in here somewhere, connected
                to a string from useState */}
            <form onSubmit={handleSubmit}>

                {/* Create input fields dynamically */}
                {/* TODO:
                Once exampleObject is changed to an arrray in 
                UpdaterRegistry, change the following lines to just
                the array name instead of Object.keys() */}
                {
                    exampleObject
                        ? Object.keys(exampleObject).map(property => {
                            return (
                                <div className="updater-form-input">
                                    <label htmlFor={changes[property]}>{property}</label>
                                    <input value={changes[property]} onChange={handleChanges(property)} />
                                </div>
                            );

                        }) : <h3>Loading form...</h3>
                }

                <button
                    className={"form-button"}
                    type="submit"

                // onClick={e => handleSubmit(e)}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

// const mapStateToProps = (state, props) => {
//     const { parentIdStrings } = props.props;
//     // parentIds.
//     const parentIds = parentIdStrings.reduce(
//         (ids, parentId) => ({ ...ids, [parentId]: state[parentId] }),
//         {}
//     );
//     console.log(`\nPARENT_ID_STRINGS in ADDERFORM:\n${parentIdStrings}`);
//     console.log(`\nPARENT_IDS in ADDERFORM:\n${parentIds}`);
//     return {
//         user_id: state.user.data ? state.user.data.id : null,
//         parentIds: parentIds ? parentIds : null // eg [{ "farm_id": 3, "pump_id": 8 }]
//     }
// }

// export default connect(mapStateToProps, {})(Form);