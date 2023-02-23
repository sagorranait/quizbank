import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "./app/store";
import Loading from "./Components/Loading";

interface RequireAuthProps{
   children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
   const {user, loading} = useAppSelector(state => state.userData);
   
   let location = useLocation();
   if (loading) { return <Loading/> }
   
   if (!user) { return <Navigate to="/login" state={{ from: location }} replace /> }

   return <>{children}</>;
}
export default RequireAuth;