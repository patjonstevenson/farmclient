import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../state/resources/user/actions";

const Login = (props) => {
    // TODO:
    // we need to know the following:

    //      what are the fields the form needs?
    //      => pass an empty object with the correct attributes
    //      => use object as starter in useState and also
    //      => use Object.keys(exampleObject) to generate form fields

    //      what to do on submit?
    //      => receive actionFunction

    // const {
    //     actionFunction,
    //     exampleObject,
    //     types,
    //     switchFormVisibility,
    //     formVisibility
    // } = props.props;
    const [credentials, setCredentials] = useState({
        email,
        password
    });


    const handleChanges = property => e => {
        // TODO:
        // Probably should make this polymorphic through closure
        setCredentials({
            ...credentials,
            [property]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();


        // Send form object to the server
        login(thing);
        // Make form go away
        switchFormVisibility();
        // Reset form
        setCredentials({
            email,
            password
        });

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


// const mapStateToProps = state => ({

// })

export default connect({ login })(Login);