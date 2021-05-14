import React from 'react';
import { connect } from 'react-redux';
import {buyBike} from '../bike/bikeAction'


const BikeComponent = (props) => {
    return (
        <div>
            <h2>Available Bikes : {props.noofbikes} </h2>
            <button onClick ={ props.buyBike}>BUY BIKE</button>
        </div>
    );
}

function mapStateToProps(state)  //takes redux state as input and retuns an obj as output
{
   return {
    noofbikes : state.bike.noofbikes     //noofcars defined in reducer imported by store and them store imported by carcontainer.js
   }
  
}  


function mapDispatchToProps(dispatch)       //takes react dispatch method as arg and returns a obj as output
{
    return{
        buyBike : () => dispatch(buyBike())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps) 
    (BikeComponent);


