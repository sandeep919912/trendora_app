import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "./ContextApis/CurrUserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";

const ProtectedRoute = () => {
  const {currUser , loading} = useContext(authContext)
  const navigate = useNavigate();

  if (loading) {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-center text-2xl">Verifying User</h1>
        </div>
    )
  }

  if (!currUser) {
    toast.info("Please login to access this page");
    return navigate("/login");
  }

  return <Outlet />;
};

export default ProtectedRoute;
