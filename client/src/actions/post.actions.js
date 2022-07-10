import axios from "axios";
import { useContext } from "react";
import { PostsContext } from "../components/AppContext";
const accessToken = JSON.parse(localStorage.getItem('userdata'));
//const postContext = useContext(PostsContext);
//const postId = postContext._id

//posts 
export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const getPosts = () => {
    return (dispatch) => {
        return axios 
            .get(`${process.env.REACT_APP_API_URL}api/post/`,
            
            /*{
                headers: {
                    'Authorization' : `Bearer ` + accessToken.token ,
                    
                    },
            }*/)
            .then((res) => {
                dispatch ({ type: GET_POSTS, payload: res.data })
                console.log(res.data)
            })
            .catch ((err) => console.log(err))

        
    }
}
/*
export function likePost(postId, userId) {
    return (dispatch) => {
        return axios ({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/like-post/` + postId,
            data: { id: userId }
        })
        .then((res) => {
            dispatch({ type: LIKE_POST, payload: { postId, userId }})
        })
        .catch((error) => console.log(error))
    }
}*/
/*
export function unlikePost(postId, userId) {
    return (dispatch) => {
        return axios ({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` + postId,
            data: { id: userId }
        })
        .then((res) => {
            dispatch({ type: UNLIKE_POST, payload: { postId, userId }})
        })
        .catch((error) => console.log(error))
    }
}
*/
/*
export function updatePost(postId, message) {
    return (dispatch) => {
        return axios ({
            method: 'put',
            url: `${process.env.REACT_APP_API_URL}api/post/` + postId,
            data: { message },
            headers: {
                Authorization: 'Bearer ' + accessToken.token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },

        })
        .then((res) => {
            dispatch({type: UPDATE_POST, payload: {message, postId}})
        })
    }


}
*/

export function deletePost(postId) {
    return (dispatch) => {
        return axios ({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}api/post/` + postId,
            headers: {
                Authorization: 'Bearer ' + accessToken.token,
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            
        })
        .then((res) => {
            dispatch({type: DELETE_POST, payload: { postId }})
        })
    }

    
}
//comments