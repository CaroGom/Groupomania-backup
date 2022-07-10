import React, { useEffect, useState } from 'react';
import { PostsContext, UidContext, UserContext } from './components/AppContext';
import Routes from "./components/Routes";

import axios from "axios";
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';



const App = () => {

    const [uid, setUid] = useState(null);
    const [userInfos, setUserInfos] = useState(null);
    const [postInfos, setPostInfos] = useState([]);
    const dispatch = useDispatch();

    //uidContext

    useEffect(() => {

        const fetchToken = async () => {
            await axios({
                method: "GET",
                url: `${process.env.REACT_APP_API_URL}`,

            })
                .then((res) => {
                    console.log(res.data)
                    console.log(localStorage.getItem('userId'))
                    setUid(localStorage.getItem('userId'))
                })
                .catch((err) => console.log("No token"))
        }
        fetchToken();

        if (uid) dispatch(getUser(uid))
    }, [uid])

    //UserInfosContext

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get(`${process.env.REACT_APP_API_URL}api/auth/${userId}`, {
                    headers:
                        { Authorization: `Bearer  ${token}` }
                })
                .then((res) => {
                    setUserInfos(res.data);
                })
                .catch((err) => console.log('erreur contexte User'));
        }
    }, []);

    //PostInfoContext

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get(`http://localhost:3000/api/post/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    setPostInfos(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, []);

    // console.log(uid);
    // console.log(userInfos);
    // console.log(postInfos);

    return (
        <UidContext.Provider value={uid}>
            <UserContext.Provider value={userInfos}>
                <PostsContext.Provider value={postInfos}>
                    <Routes />
                </PostsContext.Provider>
            </UserContext.Provider>
        </UidContext.Provider>
    );
};

export default App;

/*    const [uid, setUid]= useState(null);

    useEffect( () => {
        const fetchToken = async () => {
            await axios({
                method: "GET",
                url:`${process.env.REACT_APP_API_URL}jwtid`,
                withCredentials: true,
            })
            .then((res) => {
                console.log(res)
                setUid(res.data)})
            .catch((err) => console.log("No token"))
        }
        fetchToken();
    }, [uid])
    */

/*    const [uid, setUid]= useState(null);

useEffect( () => {
    const fetchToken = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}jwtid`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
              }
           
        })

    const verifyToken = await fetchToken.json()
        .then((res) => {
            console.log(res)
            setUid(res.data)})
        .catch((err) => console.log("No token"))
    }
    fetchToken();
}, [uid])

headers: {
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json' }
*/