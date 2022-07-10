import React, { useContext } from 'react';
import NewPostForm from '../components/Posts/NewPostForm';
import Thread from '../components/Thread';
import Log from '../components/Log';
import { UidContext } from '../components/AppContext';
import Test from '../components/Posts/ComponentTest';

const Home = () => {

    const userId=JSON.parse(localStorage.getItem('userdata'));
    console.log(userId.userId);

  

    const uid = useContext(UidContext)
    console.log(uid);


    return (
        <div className='home'>
            <div className='main'>
                <div className = "home-header">
                    
              
                
                

                { userId.userId ? <NewPostForm/> : <Log signin={true} signup={false}/>
                }
                </div>
                    
                {userId.userId ? <Thread/> : <h2>Hello ! <a href="/connexion"  rel="noopener noreferrer"> Connectez-vous </a></h2>}
 
            </div>
            
        </div>
    );
};

export default Home;

//