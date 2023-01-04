import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TeacherSignup from "./pages/TeacherSignup";
import { DataProvidor } from "./context/DataProvidor";
import TeacherLogin from "./pages/TeacherLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <TeacherSignup />,
  },
  {
    path: "/login",
    element: <TeacherLogin />,
  },
]);

root.render(
  <React.StrictMode>
    <DataProvidor>
      <RouterProvider router={router} />
    </DataProvidor>
  </React.StrictMode>
);
