import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import { PostsContext } from './AppContext';
import Navbar from './Navbar';

import Card from '../components/Posts/Card'




const Thread = () => {
   /* const { postArray,  } = useSelector((state) => ({
        ...state.postReducer,}))

    const [loadPost, setLoadPost] = useState(true);*/

    const posts =useContext(PostsContext);
    
    //const dispatch = useDispatch();
   // const posts = useSelector((state) => state.postReducer);
    

    console.log(posts);
    

    /*

    useEffect(() => {
        async function allPosts() {
            const result = await getPosts;
            if (!result) {
                console.log('erreur');
            } else {
                dispatch(getPosts())
            }
        }
        
        allPosts();
    }, [])
    */
    return (
      <>
      
        <div className='thread-container'>

          
                  {posts.length > 0 ? (
            <ul >
                <li className='container-card'>
                  {posts.map((postInfos) => <Card postInfos={postInfos} key={postInfos._id} />)}
                </li>
            </ul>
          ) : (
            <section id="publications" className="no feed">
              <p className="4">Aucune publication</p>
            </section>
          )}
        </div>

        </>
    )
}

export default Thread;

/*    return (
        <div className='thread-container'>
                  {postArray.length > 0 ? (
            <ul >
              {postArray.map((item) => (
                
                <Card>
             
                  key={'id' + item._id}

                  createdAt={item.createdAt}

                  imagePost={item.image}
                  description={item.message}
                  likes={item.likes}
                  
                  </Card>
              ))}
            </ul>
          ) : (
            <section id="publications" className="no feed">
              <p className="4">Aucune publication</p>
            </section>
          )}
        </div>
    )


    ______________

        return (
      <>
      <Navbar/>
        <div className='thread-container'>

          
                  {posts.postArray.length > 0 ? (
            <ul >
              {posts.postArray.map((item) => {
              
                return<Card item={item} 
                  key={'id' + item._id}
                  id={item._id}
                  createdAt={item.createdAt}
                  updatedAt={item.updatedAt}
                  posterId={item.posterId}
                  posterEmail={item.posterEmail}
                  admin={item.admin}
                  image={item.image}
                  message={item.message}
                  likers={item.likers}
                />;
               
})}
            </ul>
          ) : (
            <section id="publications" className="no feed">
              <p className="4">Aucune publication</p>
            </section>
          )}
        </div>

        </>
    )
}
}*/ 

