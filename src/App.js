
import './App.css';
import Dashboard from './component/Dashboard';
import Position from './component/Position';
import {
      BrowserRouter as Router,
      Routes,
      Route,
} from "react-router-dom";


function App() {

    
     

      return (
      <>

      <Router>
            <Routes>
                  <Route path='/' element={<Dashboard/>}/>
                  <Route path='/position' element={<Position />}/>
            </Routes>
      </Router>

      </>
      )
}
  
  



export default App;
