import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Service from './Service';
import Contect from './Contect';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch } from "react-router-dom";

const App = () => {
    return (
        <>
        <Navbar/>
        <Switch >
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contect" component={Contect}/>
        <Route exact path="/service" component={Service}/>
        <Redirect to="/" />
        </Switch>
        <Footer/>
          
        </>
    )
}

export default App;