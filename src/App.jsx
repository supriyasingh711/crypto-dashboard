import { useState } from 'react'
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Exchanges from './components/Exchanges'
import CoinDetails from './components/CoinDetails'
import Coins from './components/Coins'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Exchanges/>} />
      <Route path="/coins" element={<Coins/>} />
      <Route path="/coins/:id" element={<CoinDetails/>} />
    </Routes>
    </>
  )
}

export default App
