import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "./useTypedSelector";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const email = useTypedSelector((state) => state.auth.email);
  const auth_token = useTypedSelector((state) => state.auth.auth_token);

  useEffect(() => {
    if (email || auth_token) {
      navigate("/");
    }
  }, [email, auth_token]);
};
