import React, { useEffect } from "react";
import Farm from "./Farm";
import Farms from "./Farms";
import { FarmAdder } from "./Adders";
import { connect } from "react-redux";
import { fetchUserData } from "../state/resources/user/actions";
// import Login from "./Login";

const Dashboard = ({ fetchUserData, id }) => {
    // console.log("'farms' in Dashboard.js", props.farms);
    // console.log("'farms[0]' in Dashboard.js", props.farms[0]);
    // props.farms.forEach(element => {
    //     console.log("Element: ", element);
    // });
    // const user_id = 0;

    // FETCH USER DATA
    useEffect(() => {
        fetchUserData(id)
    }, []);

    return (
        <div className="dashboard">

            <h1>Farms</h1>
            <FarmAdder derived={{ user_id: id }} />
            {/* <button className="add-button">Add Farm</button> */}
            <div className="farms">
                <Farms />
                {/* {props.farms.map(farm => <Farm user_id={0} farm={farm} />)} */}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(`\nSTATE in DASHBOARD:\n${Object.keys(state)}\n`);
    return ({
        id: state.user.id
    });
}

export default connect(mapStateToProps, { fetchUserData })(Dashboard);