import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "./app/store";

interface RequireAuthProps{
   children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
   const {user} = useAppSelector(state => state.userData);
   console.log(user);
   
   let location = useLocation();
   
   if (!user.id) { return <Navigate to="/sign-in" state={{ from: location }} replace /> }

   return <>{children}</>;
}
export default RequireAuth;