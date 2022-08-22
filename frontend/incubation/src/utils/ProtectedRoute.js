import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const ProtectedRoute = ({children}) =>{
        const {user} = useContext(AuthContext)
        if(user){
            return children
        }
        return <Navigate to='/login'/>
}


export const AdminRoute = ({children})=>{
    const {user} = useContext(AuthContext)
    if (user){
        return children
    }
    return <Navigate to='/admin'/>
}