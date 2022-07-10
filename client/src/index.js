import React from 'react';


import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import'./styles/index.scss';
import store from'./reducers/index';



const root = createRoot(document.getElementById('root'));
root.render(
    
  

   <Provider store={store}>
        <App />
  </Provider>



);