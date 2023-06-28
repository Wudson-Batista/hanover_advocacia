import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='text-black'>
      <Outlet />
    </div>
  )
}

export default App