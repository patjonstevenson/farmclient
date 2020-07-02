import React, { useState } from "react";
import { connect } from "react-redux";

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
        actionFunction,
        exampleObject,
        types,
        parentIds
    } = config;

    const userId = localStorage.getItem("userId")
        ? localStorage.getItem("userId")
        : props.userId
            ? props.userId
            : null;

    console.log("userId: ", userId);


    const [thing, setThing] = useState(exampleObject);

    const handleChanges = property => e => {
        // TODO:
        // Probably should make this polymorphic through closure
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
            await actionFunction({ ...thing, ...parentIds, userId });
            // Make form go away
            switchFormVisibility();
            // Reset form
            setThing(exampleObject);
        } catch (error) {
            // console.log(`\nERROR coercing type ${typeof thing[property]} to ${types[property]}`);
            // console.log(`Occurred for property ${property}`);
            console.log("ERROR in handleSubmit in AdderForm");
            console.log("thing:\n", thing);
        }
    };
    console.log("props in AdderForm: ", props);
    console.log("exampleObject in AdderForm: ", exampleObject);

    return (
        <div className={`adder-form-${
            formVisibility
                ? "visible"
                : "invisible"
            }`}
        >
            <form onSubmit={handleSubmit}>

                {/* Create input fields dynamically */}
                {/* TODO:
                Once exampleObject is changed to an arrray in 
                AdderRegistry, change the following lines to just
                the array name instead of Object.keys() */}
                {exampleObject
                    ? Object.keys(exampleObject).map(property => {
                        return (
                            <div className="adder-form-input">
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
//         userId: state.user.data ? state.user.data.id : null,
//         parentIds: parentIds ? parentIds : null // eg [{ "farm_id": 3, "pump_id": 8 }]
//     }
// }

// export default connect(mapStateToProps, {})(Form);