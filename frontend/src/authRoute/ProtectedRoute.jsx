import { Navigate , Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({children}) => {
  const {token,isAuthReady} = useSelector((state)=>state?.user)
  if(!isAuthReady){
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  return token ? children: <Navigate to ="/signin" replace></Navigate>
}

export default ProtectedRoute;