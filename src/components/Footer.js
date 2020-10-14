import React from 'react';
import Volume from './img/Volume.svg';


function Footer() {
    return (
      <footer className="footer">
  <div class="footer-link">
    <ul>
      <li><a href=".">SUPPORT</a></li>
      <li><a href=".">ABOUT</a></li>
      <li><a href=".">CREDITS</a></li>
    </ul>
    <img src={Volume} alt="volume"/>
  </div>
       
      </footer>
    );
  }
  
  export default Footer;