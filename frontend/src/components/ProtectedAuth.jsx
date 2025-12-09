import { Navigate } from "react-router";
import { useAuth } from "./UseAuth";

const ProtectedAuth = ({ children }) => {
  const { token, user } = useAuth();
  const adminEmail = "axmedja44@gmail.com";
  if (!token) {
    return <Navigate to="/signin" />;
  }
  if (!user) return <div>Loading...</div>;
  if (user?.email !== adminEmail) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedAuth;
