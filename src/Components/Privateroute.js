import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./UserContext";

const Privateroute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/signin"></Navigate>;
};

export default Privateroute;
