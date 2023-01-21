import React from "react";
import { Navigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";

const DigitalClassAfterCodePrivateRoute = ({ children }) => {
  const { isClassStarted } = useData();
  return !isClassStarted ? children : <Navigate to="/digital-class" />;
};

export default DigitalClassAfterCodePrivateRoute;
