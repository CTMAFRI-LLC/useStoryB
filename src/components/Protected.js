import { useHistory } from "react-router-dom";
import React, { useContext } from "react";

import { appContext } from "../stores/app-store";

const Protected = ({ children }) => {
  const history = useHistory();
  const { isAuthenticated } = useContext(appContext);

  if (!isAuthenticated()) {
    history.push(`/sign-up?from=${history.location.pathname}`);
  }

  return children;
};

export default Protected;

// const Protected = ({ children }) => {
//     const history = useHistory();
//     if (!window.localStorage.getItem("8n2b5")) {
//       history.push("/sign-up");
//       return null;
//     }

//     return children;
//   };
