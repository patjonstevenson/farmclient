import React, { useState } from "react";

export default (props) => {
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
        switchFormVisibility,
        formVisibility
    } = props.props;
    const [thing, setThing] = useState(exampleObject);


    const handleChanges = property => e => {
        // TODO:
        // Probably should make this polymorphic through closure
        setThing({
            ...thing,
            [property]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Coerce the types
        for (let property in thing) {
            setThing(
                {
                    ...thing,
                    [property]: types[property](thing[property])
                }
            );
        }

        actionFunction(thing);
        switchFormVisibility();
        setThing(exampleObject);
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