import React, { createContext, useState } from "react";

export const appContext = createContext(null);

export const AppStore = ({ children }) => {
  const [store, setstate] = useState(initialStore);

  const publish = (data) => setstate((s) => ({ ...s, ...data }));
  const isAuthenticated = () => localStorage.getItem("8n2b5") ? true : false;
  const logout = () => {
    localStorage.removeItem("8n2b5");
    setstate(s => ({...s, isLoggedIn: false}))
  };

  return (
    <appContext.Provider value={{ store, publish, isAuthenticated, logout }}>
      {children}
    </appContext.Provider>
  );
};

//store
const initialStore = {
  currentForm: "sign_in",
  isLoggedIn: localStorage.getItem("8n2b5") ? true : false
};
