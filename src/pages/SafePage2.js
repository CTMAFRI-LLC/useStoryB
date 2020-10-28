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
            Safe 2
          </div>
        </nav>
      </div>
    </Protected>
  );
}

export default SuccessPage;
