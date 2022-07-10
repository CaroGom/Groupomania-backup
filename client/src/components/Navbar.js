import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { UidContext } from "./AppContext";
import Logout from "./Log/LogOut";

const Navbar = () => {
    const uid = useContext(UidContext);
    /*
    const [userData, setUserData] = useState('');

   const accessToken = JSON.parse(localStorage.getItem('userdata'));
    

    useEffect (() => 
        {
            const infosAxios = async () => {
            const res = await axios.get (`${process.env.REACT_APP_API_URL}api/auth/` + accessToken.user, {
                headers: {
                    Authorization: `Bearer ${accessToken.token}`,
                    'Content-Type': 'application/json'
                },
            });
            setUserData({
                email: res.data.email,
            });
        };
        console.log(userData.email)
        console.log(uid)
        infosAxios();
    },
      [accessToken.id, accessToken.token]);


*/
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    
                    <div className="logo">
                        <img src="./img/icon.png" alt = "icon"/>
                        <h3>Groupomania</h3>
                    </div>
                </div>
            { uid ? (
                <ul>
                    <li></li>
                    <li className="welcome">
                        
                            <h5>Bienvenue !</h5>
                        
                    </li>
                    <Logout/>
                </ul>
            ) : (
                <ul>
                    <li></li>
                    <li> 
                        <NavLink to="/connexion">
                            <img src="./img/icons/login.svg"/>
                        </NavLink>
                    </li>
                </ul>
            )}
            </div>

        </nav>
    )
};

export default Navbar;