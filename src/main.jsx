import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Actuations from './Pages/Actuations.jsx'
import Home from './Pages/Home.jsx'
import Actuation from './Pages/Actuation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/atuações' element={<Actuations />} />
          <Route path='/atuações/:actuation' element={<Actuation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
