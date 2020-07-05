import React, { useState, useEffect } from "react";

export default ({ config, formVisibility, switchFormVisibility, parentIds, props }) => {
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

    const user_id = Number(localStorage.getItem("user_id")
        ? localStorage.getItem("user_id")
        : props.user_id
            ? props.user_id
            : null);

    console.log("user_id: ", user_id);


    const [thing, setThing] = useState(exampleObject);

    // 1 if attempt successful
    // 0 if no attempt made yet
    // -1 if attempt failed
    const [attempt, setAttempt] = useState(0);

    useEffect(() => {
        console.log(`\nATTEMPT: ${attempt}\n`);
    }, [attempt]);

    const handleChanges = property => e => {
        setThing({
            ...thing,
            [property]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // Coerce the types
            for (let property in thing) {
                setThing({
                    ...thing,
                    [property]: types[property](thing[property])
                });
            }
            // Send form object to the server
            console.log("\n**Calling actionFunction with\n", { ...thing, user_id }); // removed  ...props.parentIds,
            console.log("\nAction Function: ", props.actionFunction);
            const successful = await props.actionFunction({ ...thing, user_id }); // removed  ...props.parentIds,
            if (!successful) {
                setAttempt(-1)
            } else {
                // Make form go away
                switchFormVisibility();
                // Reset form
                setThing(exampleObject);
                setAttempt(1);
            }
        } catch (error) {
            // console.log(`\nERROR coercing type ${typeof thing[property]} to ${types[property]}`);
            // console.log(`Occurred for property ${property}`);
            console.log(`\nERROR in handleSubmit in UpdaterForm\n${error}\n`);
            console.log("thing:\n", thing);
            setAttempt(-1);
        }
    };
    console.log("props in UpdaterForm: ", props);
    console.log("exampleObject in UpdaterForm: ", exampleObject);

    return (
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
                {exampleObject
                    ? Object.keys(exampleObject).map(property => {
                        return (
                            <div className="updater-form-input">
                                <label htmlFor={thing[property]}>{property}</label>
                                <input value={thing[property]} onChange={handleChanges(property)} />
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