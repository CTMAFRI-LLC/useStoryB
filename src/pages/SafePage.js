import React from "react";
import { useContext } from "react";
import Protected from "../components/Protected";

import { appContext } from "../stores/app-store";

function SuccessPage() {
  //LOGOUT FUCNTION FROM APPCONTEXT
  const { logout } = useContext(appContext);
  return (
    <Protected>
       <div class="container">
      <div class="left-container">
        <nav>
            <ul>
            <button onClick={logout}>LOGOUT</button>
                <li>FAQ</li>
                <li>CONTACT US</li>
            </ul>
        </nav>
      </div>
      
      <div class="right-container">
        <img src="" alt="Logo"/>
        <div class="right-text">
        <h1>Py Company</h1>
         <h2>Protected Page</h2>
        </div>
        
        
          <div class="cylinder">
            
          </div>
      </div>
    </div>
    </Protected>
  );
}

export default SuccessPage;
