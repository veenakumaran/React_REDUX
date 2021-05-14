import React,{useEffect, useState} from 'react';
import {fetchUsersReq, fetchUsersSuccess, fetchUsersFail, fetchUsers} from '../users/userActions';
import { connect } from 'react-redux';

const UserContainer = (props) =>
{

    const [show, setShow] = useState(false);

    useEffect(()=>
    {
     props.fetchUsers()
    },[])


    return (
        <div>
            <h3>List of User : </h3>
            <button onClick = {() => setShow(true)} >show list</button>
            
            {show? (props.userData.loading  ?  <p>loading</p> : props.userData.error ? <p>{props.userData.error}</p> : props.userData.users.map((item) => <li>{item.name} </li>)) : <p></p>}
           
           </div>
    );
}


function mapStateToProps(state)  //takes redux state as input and retuns an obj as output
{
   return {
    userData : state,
     //noofcars defined in reducer imported by store and them store imported by carcontainer.js
   }
  
}  


function mapDispatchToProps(dispatch)       //takes react dispatch method as arg and returns a obj as output
{
    return{
        fetchUsers : () => dispatch(fetchUsers())
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps) 
    (UserContainer);

