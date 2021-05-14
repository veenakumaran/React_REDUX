import { BUY_BIKE, BUY_CAR } from "./CarConstants";

const initialState ={       //INITIAL STATE
    noofCars : 10,
    noofBikes : 20,
}
//can create directly using 'reducer' shortcut

 const carReducer = (state = initialState, action) => {  //CAKEREDUCER
    switch (action.type) {
        case BUY_CAR:
            return  {...state,
                noofCars : state.noofCars-1,
            }
            case BUY_BIKE:
            return  {...state,
                noofBikes : state.noofBikes-1,
            }
        default:
            return state;
    }
};


export default carReducer;
