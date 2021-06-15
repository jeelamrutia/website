import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/employee.png";
import Common from "./Common";

const Home = () => {
    return (
        <>
         <Common
         name="Grow your Business with"
         imgsrc={web}
         visit="/Service"
         btname="Get Started"/>
        </>
    )
}

export default Home;
