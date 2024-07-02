import React from 'react'
import Home from './pages/Home'
import Adminogin from './pages/Adminlogin'
import { Route, Routes } from 'react-router-dom'
import Adminhome from './pages/Adminhome'
import Signup from './pages/Signup'
import Userhome from './pages/Userhome'
import UserSignin from './pages/UserSignin'
import Users from './pages/Users'
import Addroom from './pages/Addroom'
import Viewroom from './pages/Viewroom'
import Editroom from './pages/Editroom'
import Rooms from './pages/Room'
import Booknow from './pages/Booknow'
import Mybooking from './pages/Mybooking'
import Feedback from './pages/Feedback'
import Viewfeedback from './pages/Viewfeedback'
import Viewbooking from './pages/Viewbooking'
import Editbooking from './pages/Editbooking'

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/adminlogin' element={<Adminogin/>}/>
    <Route path='/adminhome' element={<Adminhome/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/userhome'element={<Userhome/>}/>
    <Route path='/usersignin'element={<UserSignin/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/addroom' element={<Addroom/>}/>
    <Route path='/viewroom'  element={<Viewroom/>}/>
    <Route path='/editroom/:id' element={<Editroom/>}/>
    <Route path='/room' element={<Rooms/>}/>
    <Route path='/booknow/:id' element={<Booknow/>}/>
    <Route path='/mybooking' element={<Mybooking/>}/>
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path='/viewfeedback' element={<Viewfeedback/>}/>
    <Route path={"/viewbooking"} element={<Viewbooking/>}/>
    <Route path={"/editbooking/:id"} element={<Editbooking/>}/>
  
    
    </Routes>
    
    
    </>
  )
}

export default App