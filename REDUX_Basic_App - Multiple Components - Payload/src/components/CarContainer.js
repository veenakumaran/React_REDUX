import React, {useState} from 'react';
import { connect } from 'react-redux';
import {buyCar} from '../car/CarActions'; //bcz buycar func was not imported by carreducer

//HERE WE RECEIVE THE PROPS (STORE) FROM THE COMPONENT CALL (APP.JS)
const CarContainer = (props) => {

    const [number, setNumber] = useState(1);
     const [brand, setBrand] = useState();
    return (
        <div>
            <h2>Available Car : {props.noofCars}</h2>
            <input type = "number" value ={number} onChange = {(e) => setNumber(e.target.value)}></input>
            <input type = "text" placeholder ="enter car brand" value = {brand} onChange = {(e) => setBrand(e.target.value)}></input>
            <button onClick = {() => props.buyCar(number, brand)} >BUY CAR</button>
            
            
        </div>
    );
}

function mapStateToProps(state)  //takes redux state as input and retuns an obj as output
{
   return {
    noofCars : state.car.noofCars     //noofcars defined in reducer imported by store and them store imported by carcontainer.js
   }
  
}  


function mapDispatchToProps(dispatch)       //takes react dispatch method as arg and returns a obj as output
{
    return{
       buyCar : (number,brand) => dispatch(buyCar(number,brand)),
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps) 
    (CarContainer);
