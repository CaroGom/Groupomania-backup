import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/post.actions';


const DeleteCard = ({postInfos}) => {
    const token = localStorage.getItem("token");
    const handleDelete = () => {
      axios.delete(`http://localhost:3000/api/post/${postInfos._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data, window.location.reload()))
      .catch((err) => console.log(err));

    //  window.location.reload();
    };
    return (
        <div className='div-btn' onClick={() => {
            if (window.confirm('Voulez-vous supprimer cet article ?'))
            {handleDelete()}
        }}>
            <img src ="./img/icons/trash.svg"  alt="delete-button"/>
        </div>
    )
}

export default DeleteCard;