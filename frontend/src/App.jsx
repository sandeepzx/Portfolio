import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Achivements from './pages/Achivements';
import FullData from './pages/FullData';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achivements" element={<Achivements />} />
        <Route path="/detail/:id" element={<FullData/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
