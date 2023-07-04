import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/sections/Footer'

function App() {

  return (
    <div className='text-blueGray-800'>
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default App
