'use client';

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";

import logo from '../../assets/images/fma-logo.png'; // استيراد الشعار


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Auctions", path: "/#bidding-links-section", isHash: true },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const handleHashLink = (e, path) => {
    e.preventDefault();
    const hash = path.split('#')[1];
    
    // إذا كنا على الـ home page بالفعل
    if (pathname === '/') {
      const element = document.querySelector(`#${hash}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // إذا كنا على صفحة أخرى، روح للـ home page أولاً
      window.location.href = path;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-bar')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper">
        <nav className="nav-bar luxury-nav">
          {/* Decorative corners */}
          <div className="nav-corner nav-corner-tl"></div>
          <div className="nav-corner nav-corner-tr"></div>
          <div className="nav-corner nav-corner-bl"></div>
          <div className="nav-corner nav-corner-br"></div>
          
          <div className="nav-content">
            {/* Logo with luxury styling */}
            <Link to="/" className="logo-wrapper">
             {/* <span className="logo-accent"></span>
              <span className="logo-text">FMA</span>
              <span className="logo-tagline">AUCTIONS</span>*/}
               <img src={logo} alt="Florida Machinery Auction Logo" className="logo" />
            </Link>
            
            {/* Desktop Menu */}
           <ul className="menu-desktop">
            {menuItems.map((item, i) => (
              <li key={item.label}>
                {item.isHash ? (
                  <a
                    href={item.path}
                    onClick={(e) => handleHashLink(e, item.path)}
                    className={`menu-link ${i === 0 ? 'active' : ''}`}
                  >
                    <span className="link-text">{item.label}</span>
                    <span className="link-underline"></span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`menu-link ${i === 0 ? 'active' : ''}`}
                  >
                    <span className="link-text">{item.label}</span>
                    <span className="link-underline"></span>
                  </Link>
                )}
              </li>
            ))}
          </ul>



            <div className="nav-actions">
              {/* Luxury divider */}
              <span className="nav-divider desktop-only"></span>
              
              <Link to="/contact" className="register-btn desktop-only luxury-btn">
                <span className="btn-shine"></span>
                <span className="btn-text">Register</span>
              </Link>

              {/* Mobile Menu Button */}
              <button 
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`menu-mobile ${isMenuOpen ? 'open' : ''}`}>
           <ul>
            {menuItems.map((item, i) => (
              <li key={item.label}>
                {item.isHash ? (
                  <a
                    href={item.path}
                    onClick={(e) => {
                      handleHashLink(e, item.path);
                      setIsMenuOpen(false);
                    }}
                    className={`mobile-link ${i === 0 ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`mobile-link ${i === 0 ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
            <Link to="/contact" className="register-btn mobile-register luxury-btn">
              <span className="btn-shine"></span>
              <span className="btn-text">Register</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
