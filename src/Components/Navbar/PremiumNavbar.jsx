import React from 'react';
import './PremiumNavbar.css';

function PremiumNavbar() {
  const menuItems = ["Home", "About", "Auctions", "Inventory", "Contact"];

  return (
    <header className="premium-navbar">
      <div className="premium-navbar-container">
        <div className="premium-navbar-content">
          <img 
            src="/images/fma-logo.png" 
            alt="FMA" 
            className="premium-navbar-logo" 
          />
          <ul className="premium-navbar-menu">
            {menuItems.map((item, i) => (
              <li key={item}>
                <a
                  href="#"
                  className={`premium-navbar-link ${i === 0 ? "active" : ""}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="premium-navbar-btn">
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default PremiumNavbar;