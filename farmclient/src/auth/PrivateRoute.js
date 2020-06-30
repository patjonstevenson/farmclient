import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, id, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("token") && id ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/login" />
                )
        }
    />
);

const mapStateToProps = state => ({
    id: state.user.id
})

export default connect(mapStateToProps)(PrivateRoute);