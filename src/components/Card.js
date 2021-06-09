import React, { useState } from "react"
import "./Card.css"

const Card = () => {

    const [ name, setName ] = useState("Your Name");
    const [ job, setJob ] = useState("Job Title");
    const [ about, setAbout ] = useState("Blah Blah Blah");

    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src=" " alt='' height="100px" width="100px" />
                </div>
            </div>
            <div className="lower-container">
                <h3> { name } </h3>
                <h4> { job } </h4>
                <p> { about } </p>
                <button>Visit Profile</button>
            </div>
        </div>
    )
}

export default Card