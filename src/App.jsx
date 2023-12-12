import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/home"/> }/>
        <Route path='/home' element={<Home />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
