import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import Navbar from "./components/Navbar"


function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
