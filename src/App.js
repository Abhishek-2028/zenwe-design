
import './App.css';
import Dashboard from './component/Dashboard';
import Position from './component/Position';
import {
      BrowserRouter as Router,
      Routes,
      Route,
} from "react-router-dom";
import Comset from './component/Comset';
import 'focus-visible';
import User from './component/User';
import Teams from './component/Teams';
import Billing from './component/Billing';


function App() {

    
     

      return (
      <>

      <Router>
            <Routes>
                  <Route path='/' element={<Dashboard/>}/>
                  <Route path='/position' element={<Position />}/>
                  <Route path='/comset' element={<Comset/>}/>
                  <Route path='/user' element={<User/>}/>
                  <Route path='/team' element={<Teams/>}/>
                  <Route path='/billing' element={<Billing/>}/>
                  
            </Routes>
      </Router>

      </>
      )
}
  
  



export default App;
