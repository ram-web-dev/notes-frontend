import React from "react";
import Cookies from "js-cookie";
import { Navigate, Route } from "react-router-dom";

const ProtectedComponent = (props) => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace={true} />;
  }
  return <Route {...props} />;
};

export default ProtectedComponent;
