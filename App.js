import './App.css';
//import Customer from './component/customer';
import Nav1 from './Navbar';
import Mrg from './component/Mrg';
import Lunch from './component/Lunch';
import Dinner from './component/Dinner';
import View from './component/View2';
import Table from './component/Table'
import Bd from './component/Bd'
import Ld from './component/Ld'
import Dd from './component/Dd'
import Home from './component/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    {/* <Customer/> */}
    
   <Nav1/>
    <Routes>
      <Route path='/mrg' element={<Mrg/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/lunch' element={<Lunch/>}/>
      <Route path='/dinner' element={<Dinner/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='/order' element={<View/> }/>
      <Route path='/bd' element={<Bd/> }/>
      <Route path='/ld' element={<Ld/> }/>
      <Route path='/dd' element={<Dd/> }/>
    </Routes>
    </>
   
  );
}

export default App;
