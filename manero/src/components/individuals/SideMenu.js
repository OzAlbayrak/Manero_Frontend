import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

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
            <NavLink to="/SignIn" className='nav-link'><span className='nav-link-name'>Log in</span></NavLink>
       </div>
        </div>
           <div className="inputBox">
               <input type="text" required="required"></input>
               <NavLink to="/"><i class="icon fa-solid fa-circle-arrow-right"></i></NavLink>
               <p className='text-trackorder'>Track order</p>
               <label>Order number</label>
           </div>
       </nav>
    </aside>
  </main>
  )
}

export default SideMenu
