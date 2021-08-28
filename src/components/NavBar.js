import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar(props) {
   const MyNavLink = (myNavLinkProps) => (
      // you can use props or any name  انت هنا ممكن تستخدم اي نيم بس لام تعرف ان اللي هيتمرر هنا هو البروبس او الاتربيوت اللي انت كتبتها في الماي ناف لينك اللي هي التو و الاجساكت و الاكتيف كلاس و الاطفال اللي هيا الحاجات اللي متبتها بين اقواس الماي ناف لينك
      <NavLink exact className="nav-link" activeClassName="active" {...myNavLinkProps}>
         {myNavLinkProps.children}
      </NavLink>
   );
   return (
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
                     {/* <Link className="nav-link" aria-current="page" to="/">
                        Home
                     </Link> */}
                  </li>
                  <li className="nav-item">
                     <MyNavLink to="/cloudusers2/users/">Users</MyNavLink>
                     {/* <Link className="nav-link" to="/users">
                        Users
                     </Link> */}
                  </li>
                  <li className="nav-item">
                     <MyNavLink to="/cloudusers2/users/create/">create user</MyNavLink>
                     {/* <Link className="nav-link" to="/users/create">
                        Create User
                     </Link> */}
                  </li>
                  <li className="nav-item">
                     <MyNavLink to="/cloudusers2/about/">About</MyNavLink>
                     {/* <Link className="nav-link" to="/about">
                        About
                     </Link> */}
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default NavBar;
