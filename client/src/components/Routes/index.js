import { BrowserRouter as Router, Routes, Route, Redirect, Switch } from "react-router-dom";
import React from "react";
import Accueil from "../Accueil";
import Home from "../../pages/Home";
import Connexion from "../../pages/Connexion";
import Navbar from "../Navbar";
import Auth from "../../utils/Auth";

const index = () => {
    return (
        <div>
           <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Connexion/>}/>
            
                <Route element={<Auth />}>
                <Route path="/home" element={<Home />} />
                <Route path="/connexion" element={<Connexion />} />
                </Route>
            </Routes>
           </Router>
        </div>
    );
};

export default index;