import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../utils/Utils';
import { UidContext, UserContext } from '../AppContext';
import axios from 'axios';


const NewPostForm = () => {
    //const [isLoading, setIsLoading]= useState(true)
    const [message, setMessage] = useState("");
    const [postImage, setPostImage] = useState(null);
    const [file, setFile] = useState();
    const userData = useContext(UserContext);
    const uid = useContext(UidContext);
    const token = localStorage.getItem('token');
    console.log(userData)
    //const userData= JSON.parse(localStorage.getItem('userdata'))

    const handlePicture = (e) => {
        setPostImage(e.target.files[0])
        setFile(e.target[0])
    };

    console.log(uid)

    const postData = new FormData();


    const handlePost = (e) => {
            e.preventDefault();

        if (message || postImage) {
            postData.set('posterEmail', userData.email)
            postData.set('posterId', userData._id)
            postData.set('message', message)
            if (postImage) postData.append("file", postImage);

            console.log('file', file)
            console.log('postImage', postImage)
            return axios(
                {
                    method: "post",
                    url: "http://localhost:3000/api/post/",
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



    const cancelPost = () => {
        setMessage('');
        setPostImage('');
        setFile('');

    }


    return (
        <div className='post-container'>
            <div className="data">
                <div>
                    <div className='user-info'>
                        <p>Composez un post</p>
                    </div>
                    <div className='post-form'>


                        <form className='post-form'
                            encType='multipart/form-data'
                            action=''
                            onSubmit={(e) => handlePost(e)}
                            id='post-form'>

                            <textarea
                                name="message"
                                id="message"
                                placeholder="Hello !"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            />
                            <label className='message-post' htmlFor='message'>Message post</label>


                            <div className='footer-form'>
                                <div className='icon'>
                                    <img src='./img/icons/picture.svg' alt="add image" />
                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        value={postData.file}
                                        onChange={(e) => handlePicture(e)} />

                                </div>
                                <div className='btn-send'>
                                    {message || postImage ? (
                                        <button className='cancel' onClick={cancelPost}>Annuler le post</button>
                                    ) : null}

                                    <input className='send' type = "submit" id='post-submit' value='Envoyer'/>
                                </div>
                                <label className='img-post' htmlFor='image-post'></label>

                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </div>




    )


}

export default NewPostForm;

/*{message || postImage ? (
               <li className='card-container'>
                   <div className='card-right'>
                       <div className='content'>
                           <p>{message}</p>
                           <img src={postImage} alt="illustration du post"/>
           
                       </div>
                   </div>
               </li>
           ) : null }*/