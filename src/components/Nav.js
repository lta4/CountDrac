import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    console.time("timer-1")

    const items = [];
    for (let i = 0; i < 1000000; i++) {
        items.push({ i });
    }

    console.timeEnd("timer-1")

    return (
        <div className="nav">
            {/* <Link to="/">
                <div className="one"></div>
            </Link> */}
            <Link to="/">
                <h1 className="navBar">Nav Bar</h1>
            </Link>
            <Link to="/About">
                <h2 className="aboutLink">About</h2>
            </Link>
        </div>
    )
}

export default Nav