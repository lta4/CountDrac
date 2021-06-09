import React, { useState } from "react"
import { Link, Route } from "react-router-dom"
import ExtraLayer from "../components/ExtraLayer"

const Main = (props) => {

    return (
        <div className="main">
        <Route path="/">
            <h1>Counts' Counter</h1>
                <div>
                <ExtraLayer />
                </div>
            <h2>We do the counting for you!</h2>
                <h3>Follow the storyline</h3>
                <h3>Postgres backend with storyline!</h3>
        </Route>
        </div>
    )
}

export default Main