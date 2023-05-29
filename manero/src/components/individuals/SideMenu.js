import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const [show, setShow] = useState(false);
  const [showcontact, setShowContact] = useState(false);

  return (
  <main className={show ? "space-toggle" : null}>
    <header className={`header ${show ? "space-toggle" : null}`}>
      <div className="header-toggle" onClick={() => setShow(!show)}>
        <i
          className={`icon-bars fa-light fa-bars-staggered ${
            show ? "icon-xmark fa-light fa-xmark" : null
          }`}
        ></i>
      </div>
    </header>
    <aside className={`sidebar ${show ? "show" : null}`}>
      <nav className="nav">
        <div>
          <NavLink to="/" className="nav-logo">
            <span className="nav-logo-name">Homepage</span>
          </NavLink>
          <div className="nav-list">
            <NavLink to="/Search" className="nav-link actives">
              <span className="nav-link-name">Products</span>
            </NavLink>
            <NavLink to="/SignIn" className="nav-link">
              <span className="nav-link-name">Log in</span>
            </NavLink>
        </div>
      <section className="contactpage">
        <div className={showcontact ? "nav-link-name-toggle" : null}
            onClick={() => setShowContact(!showcontact)}>
            <p
                className="vr-sidebar">
            <p className="contacttext">
              Contact us 
            <i
            className={`${
            showcontact ? "fa-light fa-chevron-down" : null
            }`}></i></p></p>
        <div
            className={`sidebarcontactus ${showcontact ? "showcontact" : null}`}>  
            
              <p className="sidebar-p">
              <i className="icons fa-light fa-location-dot"></i>
              27 Division St, New York,<br/> NY 10002, USA </p>
            <hr/>
              <p className="sidebar-p">
              <i className="icons fa-light fa-envelope"></i>
              menrosale@mail.com<br/>Manerosupport@mail.com</p>
            <hr/>
              <p className="sidebar-p">
              <i className="icons fa-light fa-phone-volume"></i>
              +17 123456789<br/>+17 987654321</p>
            <hr/>
          </div>
        </div>
      </section>
      </div>
        <div className="inputBox">
          <input type="text" required="required"></input>
          <NavLink to="/">
          <i className="icon fa-solid fa-circle-arrow-right"></i>
          </NavLink>
          <p className="text-trackorder">Track order</p>
          <label>Order number</label>
        </div>
      </nav>
    </aside>
  </main>
  );
};

export default SideMenu;
