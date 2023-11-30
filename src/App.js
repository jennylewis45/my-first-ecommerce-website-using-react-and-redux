import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Products from './Components/Products';
import Contact from './Components/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/> 
          <Route path='/signup' exact element={<Signup/>}/>
          <Route path='/products' exact element={<Products/>}/>
          <Route path='/contact' exact element={<Contact/>}/>

      </Routes>
      </Router>
   
    </div>
  );
}

export default App;
