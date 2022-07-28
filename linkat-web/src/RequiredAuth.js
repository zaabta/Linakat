import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleNotf } from "./redux/actions/notifications";

const RequireAuth = () => {
  let token = window.localStorage.getItem("token") || null;
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    token = window.localStorage.getItem("token") || null;
  },[location?.pathname])
  !token &&
    dispatch(
      toggleNotf({
        success: false,
        message: "Incorrect Login Info",
      })
    );

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
export default RequireAuth;
