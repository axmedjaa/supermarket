import { Navigate } from "react-router"
import { useAuth } from "./UseAuth"

const ProtectedUser = ({children}) => {
    const {token}=useAuth()
    if(token){
        return <Navigate to="/" />
    }
    return children
}
export default ProtectedUser