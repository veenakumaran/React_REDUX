import {BUY_BIKE} from './bikeConstants';

var initialState = {
    noofbikes : 20
}
const bikeReducer = (state = initialState , action) => {
    switch (action.type) {
        case BUY_BIKE:
            return { noofbikes : state.noofbikes - 1 }
        default:
            return state;
    }
}
export default bikeReducer;