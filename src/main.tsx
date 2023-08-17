import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home/home'
import Nav from './components/navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav/>
    <Home/>
  </React.StrictMode>,
)
