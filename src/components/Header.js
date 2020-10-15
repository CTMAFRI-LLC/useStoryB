import React, { useContext } from "react";
import LogoP from "../img/LogoP.svg";
import { appContext } from "../stores/app-store";

function Header() {
  const { store, publish } = useContext(appContext);

  const setForm = (form) => publish({ currentForm: form });

  return (
    <nav className="header">
      <img src={LogoP} alt="logo" />

      {store.currentForm === "sign_up" ? (
        <button onClick={() => setForm("sign_in")} className={`sign-btn`}>
          SIGN IN
        </button>
      ) : (
        <button onClick={() => setForm("sign_up")} className={`sign-btn`}>
          SIGN UP
        </button>
      )}
    </nav>
  );
}

export default Header;
