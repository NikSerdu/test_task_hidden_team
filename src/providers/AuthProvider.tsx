import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Navigate, Outlet } from "react-router-dom";

const AuthProvider: FC = () => {
  const email = useTypedSelector((state) => state.auth.email);
  const auth_token = useTypedSelector((state) => state.auth.auth_token);

  return <>{email || auth_token ? <Outlet /> : <Navigate to={"/auth"} />}</>;
};

export default AuthProvider;
