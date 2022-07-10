import React from "react";
import axios from "axios";

const Logout = () => {
    const logout = async() => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}api/auth/logout`,

    })
    .then (() => { 
        window.location = '/connexion';
        localStorage.clear();
        
     })
    .catch((err) => console.log(err))
    
    }
    return (
        <li onClick={logout}>
            <img src="./img/icons/logout.svg" alt ="logout"></img>
        </li>
    )
}

export default Logout;