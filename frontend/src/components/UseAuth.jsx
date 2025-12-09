import { useContext } from "react";
import Authcontext from "./AuthContext";
export const useAuth=()=>useContext(Authcontext)