import React, {useContext} from "react";
import { appContext } from "../stores/app-store";

function Home() {
  const {logIn} = useContext(appContext);
  return (
      <div>
        <button onClick={logIn} >Sing In</button>
        <nav className="welcome">
          <div className="container">
            <a className="brand-logo" href=".">
              {" "}
              PY Company
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
  );
}

export default Home;
