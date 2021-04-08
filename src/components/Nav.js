import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="one"></div>
            </Link>
            <h1>Nav Bar</h1>
        </div>
    )
}

export default Nav