import React from "react";
import { Navigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";

const ScanCodeClassroomPrivateRoute = ({ children }) => {
  const { isClassStarted } = useData();
  return isClassStarted ? children : <Navigate to="/scan-to-join" />;
};

export default ScanCodeClassroomPrivateRoute;
