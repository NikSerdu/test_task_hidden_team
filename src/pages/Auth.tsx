import { FC, useEffect } from "react";
import Auth from "../components/Auth";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AuthPage: FC = () => {
  const navigate = useNavigate();
  const email = useTypedSelector((state) => state.auth.email);
  const auth_token = useTypedSelector((state) => state.auth.auth_token);

  useEffect(() => {
    if (email || auth_token) {
      navigate("/");
    }
  }, [email, auth_token]);

  return (
    <>
      <Auth />
    </>
  );
};

export default AuthPage;
