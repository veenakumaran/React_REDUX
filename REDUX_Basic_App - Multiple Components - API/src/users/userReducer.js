import  {FETCH_USER_REQ, FETCH_USER_SUCCESS,FETCH_USER_FAIL} from './userConstants';

const initialState = {
    loading : false,
    users : [],
    error : '',
}


const userReducer = (state = initialState , action) => {
    switch (action.type) {

        case FETCH_USER_REQ:
            return {
            ...state,
            loading : true
            }
    

        case FETCH_USER_SUCCESS:
            return {
                loading : false,
                users : action.payload,
                error : ''

            }

        case FETCH_USER_FAIL:
            return {
                loading : false,
                users : [],
                error : action.payload
            }

        default : return state
        
    }

    
}
export default userReducer;