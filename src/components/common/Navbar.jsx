import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/navbar/img1.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block py-2 hover:text-yellow-400 transition ${
      isActive ? "text-yellow-400" : "text-white"
    }`;

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="bg-black shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-36 h-10 object-contain" />
        </NavLink>

        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about-us" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/spareparts" className={navLinkClass}>SpareParts</NavLink>
          <NavLink to="/repair" className={navLinkClass}>Repair Services</NavLink>
        </nav>

        <div className="hidden md:flex">
          <NavLink to="/contact">
            <button className="bg-yellow-600 text-black px-5 py-2 rounded font-medium hover:bg-yellow-400 transition">
              Contact
            </button>
          </NavLink>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16" 
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-black text-white">
          <NavLink to="/" className={navLinkClass} onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={navLinkClass} onClick={handleLinkClick}>
            About Us
          </NavLink>
          <NavLink to="/spareparts" className={navLinkClass} onClick={handleLinkClick}>
            SpareParts
          </NavLink>
          <NavLink to="/repair" className={navLinkClass} onClick={handleLinkClick}>
            Repair Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={handleLinkClick}>
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
