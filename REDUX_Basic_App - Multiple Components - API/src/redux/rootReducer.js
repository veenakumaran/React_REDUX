import { combineReducers } from "redux";
import carReducer from '../car/CarReducer';
import bikeReducer from '../bike/bikeReducer';


const rootReducer = combineReducers ({         //method accepts objects as arguments
    car : carReducer,
    bike : bikeReducer })


export default rootReducer;