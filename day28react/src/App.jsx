import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Addblogs from './Components/Addblogs'
import Blognav from './Components/Blognav'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/blog' element={<Main child={<Home/>}/>}></Route>
    <Route path='/addblogs' element={<Main child={<Addblogs/>}/>}></Route>
  </Routes>
    </>
  )
}

export default App
