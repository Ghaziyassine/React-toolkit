import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Books from './Books'
import BookList from './BookList'
import Projects from './Projects'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>

<ul className="flex justify-center space-x-8 bg-gray-800 p-4 text-white">
      <li>
        <Link to="/" className="hover:text-gray-400">Home</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-gray-400">About</Link>
      </li>
      <li>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
      </li>
      <li>
        <Link to="/bookList" className="hover:text-gray-400">BookList</Link>
      </li>
    </ul>

    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/books/:id' element={<Books />} />
        <Route path='/bookList' element={<BookList />} />
        <Route path='/projects' element={<Projects/>} />

      </Routes>






    </>
  )
}

export default Header
