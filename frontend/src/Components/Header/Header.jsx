
import "./Header.css"

import React, { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(!isLoggedIn);  
  };

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

     
      
      <button onClick={onLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  );
};

export default Header;

