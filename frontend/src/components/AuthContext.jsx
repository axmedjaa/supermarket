import { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
const Authcontext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!token){
          setUser(null);
          return;
        }
        const res = await axios.get("/api/auth/profile", {
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        setUser(res.data);
      } catch (error) {
        console.log(error);
        logout();
      }
    };
    fetchUser();
  },[token]);
  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };
  return (
    <Authcontext.Provider value={{ token, login, logout, user }}>
      {children}
    </Authcontext.Provider>
  );
};
export default Authcontext;
