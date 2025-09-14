import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/store/AuthContext"; 

const ProtectedRoute = ({ children }) => {
  const { user ,loading } = useContext(AuthContext);

    if (loading) {
    
        return null; // or a loading spinner
    }
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
