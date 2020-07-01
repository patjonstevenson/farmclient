import React, { useEffect } from "react";
import Farm from "./Farm";
import Farms from "./Farms";
import { FarmAdder } from "./Adders";
import { connect } from "react-redux";
import { fetchUserData } from "../state/resources/user/actions";
// import Login from "./Login";

const Dashboard = ({ fetchUserData, ...props }) => {
    // console.log("'farms' in Dashboard.js", props.farms);
    // console.log("'farms[0]' in Dashboard.js", props.farms[0]);
    // props.farms.forEach(element => {
    //     console.log("Element: ", element);
    // });
    // const user_id = 0;

    // FETCH USER DATA
    useEffect(async () => {
        console.log("PROPS: ", props.user.data.id);
        console.log("\nID in Dashboard useEffect: ", props.id);
        const id = localStorage.getItem("userId");
        await fetchUserData(id);
    }, []);

    console.log(props.id);
    return (
        <div className="dashboard">
            <h1>Farms</h1>
            {/* <FarmAdder /> */}
            {/* <FarmAdder derived={{ user_id: props.id }} /> */}
            {/* <button className="add-button">Add Farm</button> */}
            <div className="farms">
                <Farms />
                {/* {props.id ? <Farms /> : <></>} */}
                {/* {props.farms.map(farm => <Farm user_id={0} farm={farm} />)} */}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    console.log(`\nSTATE in DASHBOARD:\n${Object.keys(state)}\n`);
    if (state.farms && state.farms.data) { console.log("state.farms in dashboard", state.farms); }
    return ({
        id: state.user && state.user.id ? state.user.id : null,
        user: state.user
    });
}

export default connect(mapStateToProps, { fetchUserData })(Dashboard);