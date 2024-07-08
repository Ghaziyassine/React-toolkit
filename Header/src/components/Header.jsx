import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      {/* Top navigation bar hidden on small devices */}
      <nav className="bg-gray-800 p-4 hidden md:block">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Button to toggle sidebar on small devices */}
      <div className="bg-gray-800 p-4 md:hidden flex justify-between items-center">
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          ☰
        </button>
        <Link to="/" className="text-white text-lg">
          Logo
        </Link>
      </div>

      {/* Sidebar visible on small devices */}
      <div className={`fixed inset-y-0 left-0 bg-gray-800 p-4 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:hidden`}>
        <button onClick={toggleSidebar} className="text-white mb-4 focus:outline-none">
          ✕
        </button>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}



export default Header;

