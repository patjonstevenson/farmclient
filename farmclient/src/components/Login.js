import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../state/resources/user/actions";

const Login = ({ login, id, props }) => {
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
        email: "",
        password: ""
    });

    const history = useHistory();


    const handleChanges = property => e => {
        setCredentials({
            ...credentials,
            [property]: e.target.value
        })
    };

    const handleSubmit = async e => {
        e.preventDefault();

        console.log("SUBMITTING...");
        // Send form object to the server
        try {
            const successful = await login(credentials);
            console.log("Successful? ", successful);
            console.log("id: ", id);
            // navigate to dashboard if successful
            if (successful) {
                console.log("TIME TO GO TO DASHBOARD");
                console.log("History: ", props.history);
                props.history.push("/dashboard");
                // history.push("/dashboard");
            } else {
                console.log("ERROR LOGGING IN");
            }
            // Make form go away
            // switchFormVisibility();
            // Reset form
            setCredentials({
                email: "",
                password: ""
            });
        } catch (error) {
            console.log("ERROR LOGGING IN:\n", error);
        }


    };
    console.log("props in AdderForm: ", props);
    // console.log("exampleObject in AdderForm: ", exampleObject);

    return (
        <div className={`login-form`}
        >
            <form onSubmit={handleSubmit}>

                {/* Create input fields dynamically */}
                {/* TODO:
                Once exampleObject is changed to an arrray in 
                AdderRegistry, change the following lines to just
                the array name instead of Object.keys() */}

                <div className="login-form-input">
                    <label htmlFor={credentials.email}>Email</label>
                    <input value={credentials.email} onChange={handleChanges("email")} />
                </div>
                <div className="adder-form-input">
                    <label htmlFor={credentials.password}>Password</label>
                    <input type="password" value={credentials.password} onChange={handleChanges("password")} />
                </div>



                {/* {Object.keys(state).map(property => {
                    return (
                        <div className="adder-form-input">
                            <label htmlFor={thing[property]}>{property}</label>
                            <input value={thing[property]} onChange={handleChanges(property)} />
                        </div>
                    );
                })} */}

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


const mapStateToProps = state => {
    console.log(`\nUSER in Login:\n${Object.keys(state.user.data)}\n`);
    Object.keys(state.user.data).forEach(key => { console.log(`${key}:\n${state.key}`); });
    return ({
        id: state.user.id
    });
}

// const mapStateToProps = state => ({
//     state
// })

export default connect(mapStateToProps, { login })(Login);