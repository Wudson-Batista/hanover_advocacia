import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='text-blueGray-800'>
      <Outlet />
    </div>
  )
}

export default App
