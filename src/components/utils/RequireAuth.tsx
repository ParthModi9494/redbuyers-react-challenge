import React, { FunctionComponent, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
type RequireAuthProps = {
  redirectTo: string;
};

const RequireAuth: FunctionComponent<PropsWithChildren<RequireAuthProps>> = ({
  children,
  redirectTo,
}) => {
  const { isAuthenticated } = useAuth();
  return <>{isAuthenticated ? children : <Navigate to={"/login"} />}</>;
};

export default RequireAuth;
