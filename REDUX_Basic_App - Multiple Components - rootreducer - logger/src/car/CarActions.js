import {BUY_CAR} from './CarConstants'


//can create directly using 'action' shortcut

export const buyCar = () =>          //ACTION CREATOR : function that returns action object
{
  return{                            //ACTION  OBJECT
      type : BUY_CAR          
  }

}

