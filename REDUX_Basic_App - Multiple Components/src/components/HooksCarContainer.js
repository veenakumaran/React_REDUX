import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { combineReducers } from 'redux';
import { buyCar } from '../car/CarActions';


const HooksCarContainer = () => {

//useselector hook can be accessed directly by using the keyword 'useselect'
const noofCars = useSelector(state => state.noofCars);

const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cars available : {noofCars} </h2>
            <button onClick ={ () => dispatch(buyCar())}>BUY</button>
        </div>
    );
}


export default HooksCarContainer;
