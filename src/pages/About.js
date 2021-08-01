import React, { useState } from "react"
import Card from "../components/Card"

const About = () => {

    const [ name, setName ] = useState("Andrew Arias");
    const [ job, setJob ] = useState("Full Stack Developer");
    const [ about, setAbout ] = useState("I'm Andrew Arias. A Full Stack Developer and devoted husband and father. While taking on challenges which require a good sense of perseverance, I am able to convey my creative abilities while accomplishing any tasks. Let’s make our goals a reality.");
    
    return (
        <div>
            <Card name= { name } job={ job } about= { about }/>
        </div>
    );
};

export default About