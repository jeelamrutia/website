import React from 'react';

import web from "../src/images/it-company.svg";
import Common from "./Common";

const About = () => {
    return (
        <>
        <Common 
        name="Welcome to the About Page"
        imgsrc={web}
        visit="/Contect"
        btname="Contect Now"/>
         </>
    )
}

export default About;