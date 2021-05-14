import {BUY_CAR} from './CarConstants'


//can create directly using 'action' shortcut

export const buyCar = (number, brand) =>          //ACTION CREATOR : function that returns action object
{
  return{                            //ACTION  OBJECT
      type : BUY_CAR ,  
      payload : number ,  
      brandpayload : brand,
      alert : alert("thanks for purchasing " + number + " " + brand) 
  }


}

