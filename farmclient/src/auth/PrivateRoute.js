import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = props => {
    const { component: Component, user } = props
    return (
        <Route
            {...props}
            render={props =>
                localStorage.getItem("token") && props.user.data.id ? (
                    <Component {...props} />
                ) : (
                        <Redirect to="/login" />
                    )
            }
        />
    );
};

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(PrivateRoute);