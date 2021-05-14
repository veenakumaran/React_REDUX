import React from 'react';
import { connect } from 'react-redux';
 import {buyCar} from '../car/CarActions'; //bcz buycar func was not imported by carreducer

//HERE WE RECEIVE THE PROPS (STORE) FROM THE COMPONENT CALL (APP.JS)
const CarContainer = (props) => {
    return (
        <div>
            <h2>Available Cars : {props.noofCars} </h2>
            <button onClick = {props.buyCar}>BUY CAR</button>
        </div>
    );
}



function mapStateToProps(state)  //takes redux state as input and retuns an obj as output
{
   return {
    noofCars : state.noofCars     //noofcars defined in reducer imported by store and them store imported by carcontainer.js
   }
  
}  


function mapDispatchToProps(dispatch)       //takes react dispatch method as arg and returns a obj as output
{
    return{
       buyCar : () => dispatch(buyCar())
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps) 
    (CarContainer);
