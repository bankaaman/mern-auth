import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import VerifyEmail from './pages/verifyemail'
import ResetPassword from './pages/resetpassword'
const App = () => {
  return (
    <div>
     <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/login' element = {<Login/>}/>
       <Route path='/email-verify' element = {<VerifyEmail/>}/>
       <Route path='/reset-password' element = {<ResetPassword/>}/>
     </Routes>
    </div>
  )
}

export default App;
