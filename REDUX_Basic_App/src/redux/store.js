import {createStore} from 'redux';
import carReducer from  '../car/CarReducer';


const store = createStore(carReducer)


export default store;