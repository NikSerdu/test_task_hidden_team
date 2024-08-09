import { TextInput, Text, Paper, Button, Divider, Center } from "@mantine/core";
import { useAppDispatch } from "../store/store";
import { useForm } from "@mantine/form";
import { confirmAccount } from "../store/slices/auth/auth.actions";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IInitialValues {
  code: string;
}

const Confirm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { onSubmit, values, setFieldValue, errors } = useForm<IInitialValues>({
    initialValues: {
      code: "",
    },
  });

  const handleSubmit = async (data: IInitialValues) => {
    const { code } = data;
    try {
      await dispatch(confirmAccount({ code })).unwrap();
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || "An error occurred";
        notifications.show({
          title: "Error",
          message: message,
          position: "top-right",
          color: "red",
        });
      } else {
        console.log(error);
      }
    }
  };

  return (
    <Center style={{ height: "100vh" }}>
      <Paper radius="md" p="xl" withBorder>
        <Center>
          <Text size="lg" fw={500}>
            Confirm your email
          </Text>
        </Center>

        <Divider labelPosition="center" my="lg" />

        <form
          onSubmit={onSubmit((data) => {
            handleSubmit(data);
          })}
        >
          <TextInput
            required
            label="Your code"
            placeholder="Your code"
            value={values.code}
            onChange={(event) =>
              setFieldValue("code", event.currentTarget.value)
            }
            error={errors.email && "Invalid code"}
            radius="md"
          />
          <Button type="submit" radius="xl" mt={"sm"}>
            Send
          </Button>
        </form>
      </Paper>
    </Center>
  );
};

export default Confirm;
