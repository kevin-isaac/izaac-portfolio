
import './App.css';
import Header from './components/Header';
import Landing from './pages/Landing/index.js';
import UnderConstruction from './pages/Construction/index.js';
import  { useRef,useState } from 'react';
import {Routes, Link, BrowserRouter, Route, NavLink, HashRouter, Router} from 'react-router-dom';
function App() {
  const refs={
    
      About : useRef(null),
      Bio : useRef(null),
      Projects : useRef(null),
      Contact : useRef(null)
  };
  
  const [active, setActive] = useState ( "About");
 


  return (
    <div className="App" >
     
     <Header refs={refs}  active={active}/>
     <Routes>
          <Route path='/' element={<Landing setActive={setActive} refs={refs}/>} />
          <Route 
            path='/about' 
            element={<UnderConstruction />} 
          />

        </Routes>
    
 
    </div>
  );
}

export default App;
