import React from 'react';
import { Link } from 'react-router-dom';
import MyNavLink from './MyNavLink';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="ml3 navbar-brand" to="/cloudusers2">
        MUSTAFA SAAD
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <MyNavLink to="/cloudusers2">Home</MyNavLink>
          </li>
          <li className="nav-item">
            <MyNavLink to="/cloudusers2/users/">Users</MyNavLink>
          </li>
          <li className="nav-item">
            <MyNavLink to="/cloudusers2/users/create/">create user</MyNavLink>
          </li>
          <li className="nav-item">
            <MyNavLink to="/cloudusers2/about/">About</MyNavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
