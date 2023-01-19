import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherSignup from "./pages/TeacherSignup";
import { DataProvidor } from "./context/DataProvidor";
import TeacherLogin from "./pages/TeacherLogin";
import PrivateRoutes from "./components/PrivateRoutes";
import TeacherPortal from "./pages/TeacherPortal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataProvidor>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<TeacherPortal />} />
          </Route>
          <Route path="/login" element={<TeacherLogin />} />
          <Route path="/register" element={<TeacherSignup />} />
        </Routes>
      </Router>
    </DataProvidor>
  </React.StrictMode>
);
