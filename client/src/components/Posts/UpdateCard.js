import React, { useContext } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { UserContext } from '../AppContext';


const UpdateCard = ({ postInfos }) => {
    const [message, setMessage] = useState("");
    const [postImage, setPostImage] = useState(null);
    const [file, setFile] = useState();
     const [isUpdated, setIsUpdated] = useState(false);
    //const [textUpdate, setTextUpdate] = useState(postInfos.message);
    const token = localStorage.getItem('token');
    //const image = postInfos.image;
    const userData = useContext(UserContext);
    console.log(message)

      const handlePicture = (e) => {
            setPostImage(e.target.files[0])
            setFile(e.target[0])
        };
    
        const postData = new FormData();

        const handlePost = (e) => {
                e.preventDefault();
    
            if (message || postImage) {
                postData.set('message', message)
                if (postImage) postData.append("file", postImage);
    
                console.log('file', file)
                console.log('postImage', postImage)
                return axios(
                    {
                        method: "put",
                        url: `http://localhost:3000/api/post/${postInfos._id}`,
                        data: postData,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': `multipart/form-data`,
                        },
                       
                    }
                )
                .then((res) => console.log(res.data, window.location.reload()))
                .catch((err) => console.log(err));
    
            } else {
                alert('Veuillez saisir un message')
            }
    
        }


    return (

        <div>
            
            {isUpdated === true && (
                <div>
                    <form className='post-form'
                            encType='multipart/form-data'
                            action=''
                            onSubmit={(e) => handlePost(e)}
                            id='post-form'>
                    <div> {postInfos.image ? (
                        <>
                        <img src={postInfos.image}
                            alt="card-pic"
                            className="card-pic" />

                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept=".jpg, .jpeg, .png"
                            value={postData.file}
                            onChange={(e) => handlePicture(e)} />
                            <label className='message-post' htmlFor='message'></label>
                        </>
                    ) : null}</div>

                    <div className="update-post">
                        <textarea
                            defaultValue={postInfos.message}
                            onChange={(e) => setMessage(e.target.value)} />
                        <div className="button-container">
                        <input className='send' type = "submit" id='post-submit' value='Envoyer'/>
                        <label className='img-post' htmlFor='image-post'></label>
                        </div>
                    </div>
                    </form>
                </div>
            )}

                <div className='button-container' onClick={() => setIsUpdated(!isUpdated)}>
                    <img src="./img/icons/edit.svg" alt="edit" />
                </div>

            
            </div>
    )
            
}


            export default UpdateCard;

/*<div onClick={() => setIsUpdated(!isUpdated)}>
                                <img src="./img/icons/edit.svg" alt="edit"/>
                            </div>
    { user.admin === true ? (
      <div className="button-container">
      <div onClick={() => setIsUpdated(!isUpdated)}>
          <img src="./img/icons/edit.svg" alt="edit"/>
      </div>
      
 </div>
    ): token.userId === postInfos.posterId  && (
       <div className="button-container">
            <div onClick={() => setIsUpdated(!isUpdated)}>
                <img src="./img/icons/edit.svg" alt="edit"/>
            </div>
            
       </div>
        ) 

      }*/