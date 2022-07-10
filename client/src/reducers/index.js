import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import postReducer from './post.reducer';
import userReducer from './user.reducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    userReducer,
    postReducer,
});

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk, logger))
);
console.log(rootReducer);
export default store; 
