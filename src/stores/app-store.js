import React, { createContext, useState } from "react";

export const appContext = createContext(null);

export const AppStore = ({ children }) => {
  const [store, setstate] = useState(initialStore);
  const publish = (data) => setstate((s) => ({ ...s, ...data }));

  return (
    <appContext.Provider value={{ store, publish }}>
      {children}
    </appContext.Provider>
  );
};

//store
const initialStore = {
  currentForm: "sign_in",
};
