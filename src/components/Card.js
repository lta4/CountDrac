import React, { useState } from "react"
import "./Card.css"

const Card = () => {

    const [ name, setName ] = useState("Your Name");
    const [ job, setJob ] = useState("Job Title");
    const [ about, setAbout ] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://res.cloudinary.com/dfltkqotn/image/upload/v1614972036/IMG_2031_ygt8yt.png" alt='' height="100px" width="100px" />
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