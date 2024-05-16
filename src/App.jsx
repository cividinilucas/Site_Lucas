import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="aboutme" element={<AboutMe/>}/>
    </Routes>
     <Footer></Footer>
    </>
  )
}

export default App
