import { FC } from "react";
import Auth from "../components/Auth";
import { useAuthRedirect } from "../hooks/useAuthRedirect";

const AuthPage: FC = () => {
  useAuthRedirect();

  return (
    <>
      <Auth />
    </>
  );
};

export default AuthPage;
