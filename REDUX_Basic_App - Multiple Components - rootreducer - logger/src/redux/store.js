import {createStore,applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import {logger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

// const store = createStore(rootReducer,applyMiddleware(logger))  //apply middleware is passed as a second argument to the store 
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store;