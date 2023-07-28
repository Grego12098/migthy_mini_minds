import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";


export default function ProtectedRoutes() {
    const { session } = useContext(AuthContext);

    return session ? <Outlet/> : <Navigate to="/" />;
}

// only allows authorised users to access the app layout
