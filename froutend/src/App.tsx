

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import LoginPage from './pages/Login'
import SingupPage from './pages/SingupPage'
import Home from './pages/Home'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/singin' element={<LoginPage />} />
          <Route path='/singup' element={<SingupPage />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
