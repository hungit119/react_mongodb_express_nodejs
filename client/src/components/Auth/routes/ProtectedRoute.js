import React from "react";
import { Navigate } from "react-router-dom";
import { useGoogleAuth } from "../google/GoogleLogin";
const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useGoogleAuth();
  return isSignedIn === true ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
