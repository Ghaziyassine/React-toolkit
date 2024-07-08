import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Books from './components/Books'
import BookList from './components/BookList'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header/>

    </>
  )
}

export default App
