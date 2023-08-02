import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";
import { useContext } from "react";

export default function SkipLogin() {
    const { session } = useContext(AuthContext);
   
    {if(session) return <Navigate to="/appLayout/welcomePage" />};
}


