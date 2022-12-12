import { useUserAuth } from "../context/userAuthContext";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectRoute;
