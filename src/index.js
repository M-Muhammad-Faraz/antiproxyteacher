import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherSignup from "./pages/TeacherSignup";
import { DataProvidor } from "./context/DataProvidor";
import TeacherLogin from "./pages/TeacherLogin";
import PrivateRoutes from "./components/PrivateRoutes";
import TeacherPortal from "./pages/TeacherPortal";
import TeacherPortalPrivateRoute from "./utils/TeacherPortalPrivateRoute";
import TeacherLoginPrivateRoute from "./utils/TeacherLoginPrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataProvidor>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TeacherPortalPrivateRoute>
                <TeacherPortal />
              </TeacherPortalPrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <TeacherLoginPrivateRoute>
                <TeacherLogin />
              </TeacherLoginPrivateRoute>
            }
          />
          <Route path="/register" element={<TeacherSignup />} />
        </Routes>
      </Router>
    </DataProvidor>
  </React.StrictMode>
);
