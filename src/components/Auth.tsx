import { upperFirst } from "@mantine/hooks";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Anchor,
  Stack,
  Center,
} from "@mantine/core";
import { useAuthForm } from "../hooks/useAuthForm";

const Auth = () => {
  const { authType, form, toggleAuthType, handleSubmit } = useAuthForm();
  const { onSubmit, errors, values, setFieldValue } = form;

  return (
    <Center style={{ height: "100vh" }}>
      <Paper radius="md" p="xl" withBorder>
        <Center>
          <Text size="lg" fw={500}>
            Auth
          </Text>
        </Center>

        <Divider labelPosition="center" my="lg" />

        <form
          onSubmit={onSubmit((data) => {
            handleSubmit(data);
          })}
        >
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="Your email"
              value={values.email}
              onChange={(event) =>
                setFieldValue("email", event.currentTarget.value)
              }
              error={errors.email && "Invalid email"}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={values.password}
              onChange={(event) =>
                setFieldValue("password", event.currentTarget.value)
              }
              error={
                errors.password &&
                "Password should include at least 6 characters"
              }
              radius="md"
            />

            {authType === "register" && (
              <PasswordInput
                required
                label="Repeat password"
                placeholder="Repeat your password"
                value={values.repeat_password}
                onChange={(event) =>
                  setFieldValue("repeat_password", event.currentTarget.value)
                }
                error={errors.repeat_password && "Passwords should match"}
                radius="md"
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggleAuthType()}
              size="xs"
            >
              {authType === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(authType)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Center>
  );
};

export default Auth;
