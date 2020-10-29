import { useHistory } from "react-router-dom";
import React, { useContext } from "react";

import { appContext } from "../stores/app-store";

//VALIDATING LOGIN BEFORE REDIRECTING 
//USING HISTORY TO NAVIGATE BETWEEN PAGES

const Protected = ({ children }) => {
  const history = useHistory();
  const { isAuthenticated } = useContext(appContext);

  if (!isAuthenticated()) {
    history.push(`/sign-up?from=${history.location.pathname}`);
  }

  return children;
};

export default Protected;
