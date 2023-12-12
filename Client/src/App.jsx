import React from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Admin' element={<Admin/>} />
      <Route path='/Account' element={<Account/>} />
    </Routes>
  )
}

export default App