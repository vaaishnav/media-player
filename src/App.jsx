
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Mheader from './components/Mheader'
import Mfooter from './components/Mfooter'




function App() {

  return (
    <>
    <Mheader/>

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch' element={<Watch/>}/>

    </Routes>
    <Mfooter/>
    </>
  )
}

export default App
