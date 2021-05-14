import logo from './logo.svg';
import './App.css';
import CarContainer from './components/CarContainer';
import HooksCarContainer from './components/HooksCarContainer';
import store from './redux/store';
import {Provider} from 'react-redux'

function App() {
  return (                 //PASSING STORE AS PROPS USING THE PROVIDER COMPONENT I.E ALL THE COMPONENTS IN APP
    <Provider store= {store}>       
    <HooksCarContainer/>
    </Provider>
  )
}


export default App;
