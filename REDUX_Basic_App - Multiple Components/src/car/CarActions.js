import { bindActionCreators } from 'redux'
import {BUY_CAR, BUY_BIKE} from './CarConstants'


//can create directly using 'action' shortcut

export const buyCar = () =>          //ACTION CREATOR : function that returns action object
{
  return{                            //ACTION  OBJECT
      type : BUY_CAR          
  }

}


export const buyBike = () =>          //ACTION CREATOR : function that returns action object
{
  return{                            //ACTION  OBJECT
      type : BUY_BIKE         
  }

}

