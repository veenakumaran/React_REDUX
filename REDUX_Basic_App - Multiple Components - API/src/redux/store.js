import {createStore,applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import userReducer from  '../users/userReducer';
import thunk from 'redux-thunk';


// const store = createStore(rootReducer)
// const store = createStore(userReducer)
const store = createStore( userReducer, applyMiddleware (thunk))

export default store;