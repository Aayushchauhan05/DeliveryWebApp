import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
function App() {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route  path='/Login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/Register' element={<Register/>}/>
    </Routes>
    
    </>
  )
}



export default App