import { BUY_CAR } from "./CarConstants";

const initialState ={       //INITIAL STATE
    noofCars : 10
}
//can create directly using 'reducer' shortcut

 const carReducer = (state = initialState, action) => {  //CAKEREDUCER
    switch (action.type) {
        case BUY_CAR:
            return  {
                noofCars : state.noofCars-1,
            }
        default:
            return state;
    }
};

export default carReducer;
