import { useNavigate } from "react-router-dom";
import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { login, register } from "../store/slices/auth/auth.actions";
import { useAppDispatch } from "../store/store";
import { notifications } from "@mantine/notifications";
import axios from "axios";

interface IFormValues {
  email: string;
  password: string;
  repeat_password: string;
}

export const useAuthForm = () => {
  const [authType, toggleAuthType] = useToggle<"login" | "register">([
    "login",
    "register",
  ]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<IFormValues>({
    initialValues: {
      email: "",
      password: "",
      repeat_password: "",
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      repeat_password: (val, values) =>
        val !== values.password && authType === "register"
          ? "Passwords don't match"
          : null,
    },
  });

  const handleSubmit = async (data: IFormValues) => {
    const { email, password, repeat_password } = data;

    try {
      if (authType === "login") {
        await dispatch(login({ email, password })).unwrap();
        navigate("/");
      } else if (authType === "register") {
        await dispatch(register({ email, password, repeat_password })).unwrap();
        navigate("confirm");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const message = error.response?.data?.message || "An error occurred";
        if (status === 403) {
          navigate("confirm");
        } else {
          notifications.show({
            title: "Error",
            message: message,
            position: "top-right",
            color: "red",
          });
        }
      } else {
        console.log(error);
      }
    }
  };

  return { authType, toggleAuthType, form, handleSubmit };
};
