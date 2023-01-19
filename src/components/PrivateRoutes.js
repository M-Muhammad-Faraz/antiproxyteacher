import { Outlet, Navigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";
const PrivateRoutes = () => {
  const userData = useData();
  console.log(userData);
  return userData.user ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
