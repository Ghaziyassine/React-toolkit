import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import './styles/globals.css'
import {
  BrowserRouter 
} from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  </React.StrictMode>,
)
