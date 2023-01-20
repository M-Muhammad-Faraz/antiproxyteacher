import React from "react";
import { Navigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";

const TeacherPortalPrivateRoute = ({ children }) => {
  const userData = useData();
  return userData.user ? children : <Navigate to="/login" />;
};

export default TeacherPortalPrivateRoute;
