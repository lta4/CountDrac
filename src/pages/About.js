import React, { useState } from "react"
import Card from "../components/Card"

const About = () => {

    const [ name, setName ] = useState("Your Name");
    const [ job, setJob ] = useState("Job Title");
    const [ about, setAbout ] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    
    return (
        <div>
            <h1>Hello About</h1>
            <Card name={ 'Andrew Arias' } job={ 'Full Stack Developer' } about= { about }/>
        </div>
    );
};

export default About