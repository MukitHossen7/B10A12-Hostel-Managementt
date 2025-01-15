import { FadeLoader } from "react-spinners";
import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();
  if (isLoading) {
    <div className="flex justify-center items-center min-h-screen">
      <FadeLoader color="#10e14b" />
    </div>;
  }
  if (role === "admin") return children;
  return <Navigate to="/dashboard" replace="true"></Navigate>;
};

export default AdminRoute;
