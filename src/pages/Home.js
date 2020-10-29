import React, { useContext } from "react";
import { Link } from "react-router-dom";



function Home() {

  return (
    <div class="container">
      <div class="left-container">
        <nav>
            <ul>
                <li>
                 <Link to="/safe">SIGN IN</Link> </li>
                <li>
                <Link to="/">FAQ</Link></li>
                <li>
                <Link to="/">CONTACT US</Link></li>
            </ul>
        </nav>
      </div>
      
      <div class="right-container">
        <img src="" alt="Logo"/>
        <div class="right-text">
         <h1>Py Company</h1>
         <h2>Public Page</h2>
        </div>
        
        
          <div class="cylinder">
            
          </div>
      </div>
    </div>
  );
}

export default Home;
