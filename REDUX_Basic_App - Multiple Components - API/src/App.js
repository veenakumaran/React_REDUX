import logo from './logo.svg';
import './App.css';
import CarContainer from './components/CarContainer';
import BikeComponent from './components/BikeContainer';
import HooksCarContainer from './components/HooksCarContainer';
import store from './redux/store';
import {Provider} from 'react-redux'
import UserContainer from './components/UserContainer'

function App() {
  return (                 //PASSING STORE AS PROPS USING THE PROVIDER COMPONENT I.E ALL THE COMPONENTS IN APP
    <Provider store = {store}>  

    {/* <CarContainer/>    
    {/* <HooksCarContainer/> */}
    {/* <BikeComponent/> */} 
    <UserContainer/>

    </Provider>
  )
}



export default App;
