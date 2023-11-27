'use client'
import React, { useState } from 'react';


enum NavRoutes {
  Home = '/',
  Speakers = '/speakers',
  Sessions = '/sessions',
  Admin = '/admin',
}

export default function Nav() {
  const [activeNav, setActiveNav] = useState<NavRoutes>(NavRoutes.Home);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavClick = (navItem: NavRoutes) => {
    setActiveNav(navItem);
    setIsNavCollapsed(true); // Collapse the menu after a selection
  };

  const handleToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light p-3'>
      <a className='navbar-brand' href={NavRoutes.Home}>
        <img
          src='/images/svcc-logo.png'
          alt='SVCC'
          height={25}
          className='d-inline-block align-top'
        />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        onClick={handleToggle}
        aria-controls='navbarNav'
        aria-expanded={!isNavCollapsed}
        aria-label='Toggle navigation'
        style={{ marginLeft: 'auto' }} // Align the button to the far right
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id='navbarNav'>
        <ul className='navbar-nav'>
          <li
            className={`nav-item ${activeNav === NavRoutes.Speakers ? 'active' : ''}`}
          >
            <a
              className='nav-link'
              href={NavRoutes.Speakers}
              onClick={() => handleNavClick(NavRoutes.Speakers)}
            >
              Speakers
            </a>
          </li>
          <li
            className={`nav-item ${activeNav === NavRoutes.Sessions ? 'active' : ''}`}
          >
            <a
              className='nav-link'
              href={NavRoutes.Sessions}
              onClick={() => handleNavClick(NavRoutes.Sessions)}
            >
              Sessions
            </a>
          </li>
          <li
            className={`nav-item ${activeNav === NavRoutes.Admin ? 'active' : ''}`}
          >
            <a
              className='nav-link'
              href={NavRoutes.Admin}
              onClick={() => handleNavClick(NavRoutes.Admin)}
            >
              Admin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
