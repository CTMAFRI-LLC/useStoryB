import React from 'react';
import LogoP from './img/LogoP.svg';


function Header() {
    return (      
        <nav  className="header">
            <img src={LogoP} alt="logo"/>
            <button className='signin-btn'><a href=".">SIGN IN</a></button>
        </nav>
    );
  }
  
  export default Header;