import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Portfolio
        </Link>
        
        <button 
          className={`header__menu-button ${isMenuOpen ? 'header__menu-button--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 