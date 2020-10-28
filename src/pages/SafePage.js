import React from "react";
import { useContext } from "react";
import Protected from "../components/Protected";

import { appContext } from "../stores/app-store";

function SuccessPage() {
  const { logout } = useContext(appContext);
  return (
    <Protected>
      <div>
        <nav className="welcome">
          <div className="container">
            <button onClick={logout}>Logout</button>
            <a className="brand-logo" href=".">
              {" "}
              PY Company Safe
            </a>
            <ul className="nav-links">
              <li>
                <a href=".">Home</a>
              </li>
              <li>
                <a href=".">About</a>
              </li>
              <li>
                <a href=".">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Protected>
  );
}

export default SuccessPage;
