
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import "./Header.css"

import React, { useContext, useEffect, useState } from 'react';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  return (
    <div className="header">
      <div className="logo">ReactAuction</div>

      <nav>
        <ul>
          <li> <a href="/">Home</a></li>
          <li> <a href="/">About</a></li>
          <li> <a href="/">Contact</a></li>
        </ul>
      </nav>

     
      {!isLoggedIn ? (
        <NavLink className="login" to="/login"><button>Login</button></NavLink>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
};

export default Header;

