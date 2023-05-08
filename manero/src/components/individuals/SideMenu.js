import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';

const SideMenu = () => {
    
    const [show, setShow] = useState(false);
  
      return (
          <main className={show ? 'space-toggle' : null}>
          <header className={`header ${show ? 'space-toggle' : null}`}>
            <div className='header-toggle' onClick={() => setShow(!show)}>
              <i className={`fa-light fa-bars-staggered ${show ? 'fa-light fa-xmark' : null}`}></i>
            </div>
          </header>
          <aside className={`sidebar ${show ? 'show' : null}`}>
        
            <nav className='nav'>
              <div>
                <NavLink to="/HomeView" className='nav-logo'><span className='nav-logo-name'>Homepage</span></NavLink>
  
                <div className='nav-list'>
                  <NavLink to="/" className='nav-link actives'><span className='nav-link-name'>Products</span></NavLink>
                  <NavLink to="/" className='nav-link'><span className='nav-link-name'>About us</span></NavLink>
                  <NavLink to="/" className='nav-link'><span className='nav-link-name'>Contact</span></NavLink>
                </div>
              </div>
    
              <NavLink to="/" className='nav-link'><span className='nav-link-name'>Log in</span></NavLink>
            </nav>
          </aside>
        </main>
      )
  }
  export default SideMenu
