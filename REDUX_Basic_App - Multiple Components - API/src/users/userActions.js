import  {FETCH_USER_REQ, FETCH_USER_SUCCESS,FETCH_USER_FAIL} from './userConstants';
import axios from 'axios';

export const fetchUsersReq = () => ({
    type: FETCH_USER_REQ
});

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USER_SUCCESS,
    payload: users
});

export const fetchUsersFail = (errormsg) => ({
    type: FETCH_USER_FAIL,
    payload: errormsg
});

//special function - making using of thunk middlware to return a function
//unlike other action creators that return a action
export const fetchUsers = () => {

    return (dispatch) => {  // we return a function and takes dispatch method as arg
        dispatch(fetchUsersReq)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
        const errormsg = error.message 
        dispatch(fetchUsersFail(errormsg))
        })

    }};
