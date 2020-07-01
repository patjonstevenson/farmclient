import React, { useState } from "react";
import { connect } from "react-redux";

const Form = (props) => {
    // TODO:
    // we need to know the following:

    //      what are the fields the form needs?
    //      => pass an empty object with the correct attributes
    //      => use object as starter in useState and also
    //      => use Object.keys(exampleObject) to generate form fields

    //      what to do on submit?
    //      => receive actionFunction

    const {
        user_id,
        actionFunction,
        exampleObject,
        types,
        switchFormVisibility,
        formVisibility,
        parent_ids
    } = props;

    const [thing, setThing] = useState(exampleObject);

    const handleChanges = property => e => {
        // TODO:
        // Probably should make this polymorphic through closure
        setThing({
            ...thing,
            [property]: e.target.value
        });
    };

    const handleSubmit = e => {
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
            actionFunction({ ...thing, ...parent_ids, user_id });
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
                {Object.keys(exampleObject).map(property => {
                    return (
                        <div className="adder-form-input">
                            <label htmlFor={thing[property]}>{property}</label>
                            <input value={thing[property]} onChange={handleChanges(property)} />
                        </div>
                    );
                })}

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

const mapStateToProps = (state, props) => {
    const { parent_id_strings } = props.props;
    // parent_ids.
    const parent_ids = parent_id_strings.reduce(
        (ids, parent_id) => ({ ...ids, [parent_id]: state[parent_id] }),
        {}
    );
    console.log(`\nPARENT_ID_STRINGS in ADDERFORM:\n${parent_id_strings}`);
    console.log(`\nPARENT_IDS in ADDERFORM:\n${parent_ids}`);
    return {
        user_id: state.user.data ? state.user.data.id : null,
        parent_ids // eg [{ "farm_id": 3, "pump_id": 8 }]
    }
}

export default connect(mapStateToProps, {})(Form);