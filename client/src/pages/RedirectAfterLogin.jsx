import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext"; 
const RedirectAfterLogin = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Navigate to="/home" /> : null;
};

export default RedirectAfterLogin;
