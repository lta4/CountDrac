import React from "react"
import "./Card.css"

const Card = ({ name, job, about }) => {

    return (
        <div className="cardContainer">
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
                    <div className="aboutButtonContainer">
                    <button className="aboutButton"><a href="https://github.com/lta4" target="_blank" className="aboutLink">Visit Profile</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card