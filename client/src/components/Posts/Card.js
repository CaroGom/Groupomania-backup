import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updatePost } from "../../actions/post.actions";
import moment from 'moment';
import 'moment/locale/fr';
import LikeButton from "./LikeButton";
import DeleteCard from './DeleteCard';
import { useContext } from "react";
import { UidContext, PostsContext, UserContext } from "../AppContext";
import UpdateCard from "./UpdateCard";
moment.locale('fr');



export default function Card({ postInfos }) {
    const dispatch = useDispatch();
    const user= useContext(UserContext)
    const uid = useContext(UidContext);
    const [isAdmin, setIsAdmin]=useState(false);
    const [isUpdated, setIsUpdated]=useState(false);
    const [textUpdate, setTextUpdate]=useState(null);
    const token = JSON.parse(localStorage.getItem('userdata'));
   
  console.log('condition card', token.userId, '/', postInfos.posterId)

   /* const updatePost = (postId, message) => {

      return axios ({
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}api/post/` + postId,
        data: { message },
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
        
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log('erreur front'))
        }
  
  
  
    const updateItem =  () => {
      if (textUpdate) {
         updatePost(
          postInfos._id, textUpdate
        )
        setIsUpdated(false)
        
      }*/

    return (

        <li className="card-container" >
            
                <div className="card-right">
                    <div className="card-header">
                        <div className="pseudo">
                            
                                <h3>
                                {postInfos.posterEmail}
                                </h3>
                            
                        </div>
                            <span>{moment(postInfos.createdAt).format('LLL')}</span>
                    </div>
                   
                   
                    { postInfos.image ? (
                    <img src={postInfos.image} 
                    alt="card-pic" 
                    className="card-pic" />
                    ): null}
                    
                    <p>{postInfos.message}</p>
                    
                    <div className="card-footer">

                    { user.admin === true ? (
                      <>
                      <div className="button-container">
                      <UpdateCard postInfos={postInfos}/>
                      </div>
                      <div className="button-container">
                      <DeleteCard postInfos={postInfos}/>
                      </div>
                      </>

                    ): ( token.userId === postInfos.posterId  && (
                      <>
                      <div className="button-container">
                      <UpdateCard postInfos={postInfos}/>
                      </div>
                      <div className="button-container">
                        <DeleteCard postInfos={postInfos}/>
                      </div>
                      </>
       
                    ) 
                    )
                  }
                    
                      
                      <LikeButton postInfos = {postInfos}/>
                      
                      
                      </div>
                </div>
            
        </li>
    )
}




/*  { user.admin === true  && (
                       <div className="button-container">
                            <div onClick={() => setIsUpdated(!isUpdated)}>
                                <img src="./img/icons/edit.svg" alt="edit"/>
                            </div>
                            <DeleteCard postInfos={postInfos}/>
                       </div>
                        )

                      }*/

    /*const [post, setPost] = useState({
       
      _id: props._id,
      message: props.message,
      image: props.image,
    });
    console.log('props.admin test', props.admin);
    console.log('post', post);

    
  const { postArray, userInfo } = useSelector((state) => ({
    //...state.commentReducer,
    ...state.postReducer,
    ...state.userReducer,
  }));

  console.log(token.userId, props.id);
*/

/*  const updatePost = ({postInfos}) => {

    return axios ({
      method: 'put',
      url: `${process.env.REACT_APP_API_URL}api/post/` + postId,
      data: { message }
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log('erreur front'))
      }




  const updateItem =  () => {
    if (textUpdate) {
       updatePost(
        postInfos.id, textUpdate
      )
      setIsUpdated(false)
      
    }
  };
  
  
  
  
    const updateItem =  () => {
    if (textUpdate) {
       dispatch(updatePost(
        postInfos._id, textUpdate
      ))
      setIsUpdated(false)
      
    }
  };
*/