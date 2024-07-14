import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuCode2 } from "react-icons/lu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`p-4 sticky top-0 px-3 transition-all duration-300 ${
        scroll ? 'bg-gray-700' : 'bg-gray-900'
      } ${scroll ? "bg-opacity-90 shadow-lg" : "bg-opacity-100"} font-mono`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="ml-4 flex items-center">
          <Link to="/" className="flex items-center">
            <LuCode2 className="text-3xl mr-2" />
            <h1 className="font-bold text-2xl">CodeJudge</h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>
          <Link to="/problems" className="text-white hover:text-gray-300 transition-colors duration-300">
            Problems
          </Link>
          <Link to="/bookmarks" className="text-white hover:text-gray-300 transition-colors duration-300">
            Bookmarks
          </Link>
          <Link to="/profile" className="text-white hover:text-gray-300 transition-colors duration-300">
            Profile
          </Link>
          <Link to="/register" className="text-white hover:text-gray-300 transition-colors duration-300">
            Register
          </Link>
          <Link to="/login" className="text-white hover:text-gray-300 transition-colors duration-300">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 md:hidden flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/problems" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
              Problems
            </Link>
            <Link to="/bookmarks" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
              Bookmarks
            </Link>
            <Link to="/profile" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
              Profile
            </Link>
            <Link to="/register" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
              Register
            </Link>
            <Link to="/login" className="text-white hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
