import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-700 text-white py-4 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">Springdale Public School</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <nav className="hidden md:flex flex-wrap space-x-2 lg:space-x-4">
          <Link to="/" className="hover:underline text-xs md:text-sm lg:text-base">Home</Link>
          <Link to="/about" className="hover:underline text-xs md:text-sm lg:text-base">About Us</Link>
          <Link to="/academics" className="hover:underline text-xs md:text-sm lg:text-base">Academics</Link>
          <Link to="/admissions" className="hover:underline text-xs md:text-sm lg:text-base">Admissions</Link>
          <Link to="/faculty" className="hover:underline text-xs md:text-sm lg:text-base">Faculty</Link>
          <Link to="/students" className="hover:underline text-xs md:text-sm lg:text-base">Students</Link>
          <Link to="/gallery" className="hover:underline text-xs md:text-sm lg:text-base">Gallery</Link>
          <Link to="/contact" className="hover:underline text-xs md:text-sm lg:text-base">Contact Us</Link>
        </nav>
      </div>
      <nav className={`fixed top-0 left-0 h-full w-64 bg-blue-700 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <div className="p-4">
          <button onClick={toggleMenu} className="text-3xl text-white focus:outline-none">
            <FiX />
          </button>
        </div>
        <Link to="/" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>About Us</Link>
        <Link to="/academics" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Academics</Link>
        <Link to="/admissions" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Admissions</Link>
        <Link to="/faculty" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Faculty</Link>
        <Link to="/students" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Students</Link>
        <Link to="/gallery" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Gallery</Link>
        <Link to="/contact" className="block mt-2 px-4 py-2 hover:underline" onClick={toggleMenu}>Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
