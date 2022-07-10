import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { UidContext, UserContext } from '../AppContext';
import { likePost, unlikePost } from '../../actions/post.actions';

function LikeButton(postInfos) {
    const user = useContext(UidContext);
    //const [liked, setLiked] = useState(false);
    console.log(postInfos.postInfos._id);

    const DisplayLike = () => {
        const handleLike = () => {
            const token = localStorage.getItem("token");
            return axios ({
                method: 'patch',
                url: `${process.env.REACT_APP_API_URL}api/post/like-post/${postInfos.postInfos._id}`,
                data: { id: user },
                headers: {
                    Authorization: `Bearer ${token}`,
                    
                },
            })
                .then((res) => console.log(res.data, window.location.reload()))
                .catch((err) => console.log(err));
            
        };
        const handleUnlike = () => {
            const token = localStorage.getItem("token");
            return axios ({
                method: 'patch',
                url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/${postInfos.postInfos._id}`,
                data: { id: user },
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => console.log(res.data, window.location.reload()))
                .catch((err) => console.log(err));
            


        };

        console.log(user)
        for (let i = 0; i < postInfos.postInfos.likers.length; i++) {
            if (postInfos.postInfos.likers.includes(user)) {
                return (
                    <img src="./img/icons/heart-filled.svg" onClick={handleUnlike} alt="like" />
                    )
                } else {
                     return (
                        <img src="./img/icons/heart.svg" onClick={handleLike} alt="like" />
                    )
                }
           
        }
         if (postInfos.postInfos.likers.length === 0){
                return (
                    <img src="./img/icons/heart.svg" onClick={handleLike} alt="like" />

            )}
      
    };

    // console.log(uid)

    return (
        <div className='Like-container'>
            <DisplayLike />
            <span>{postInfos.postInfos.likers.length}</span>
        </div>
    )
}

export default LikeButton;
   /* const token = JSON.parse(localStorage.getItam('userdata'));
const id = JSON.parse(localStorage.getItem('userdata')).user;
*/



/*

const getLikes = async () => {
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}api/auth/` + id, 
    { postPostId: props.postPostId },
    
        {headers: {
            'Authorization': `Bearer `+ token.token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }}
        ,);
    setLikes(data.likers.length);
    data.likers.map((like) => {
        if (likers.userId === id && likers.postPostId === props.postPostId) {
            set likedAction(true);
        }
    })
 
    }

useEffect(() =>{
    getLikes();
}, []);

const likePost = (postId) => {
    axios 
    .post
}
    
}*/

