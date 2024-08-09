import { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Button, Center, Stack, Text } from "@mantine/core";
import { logout } from "../store/slices/auth/auth.actions";
import { useAppDispatch } from "../store/store";

const HomePage: FC = () => {
  const email = useTypedSelector((state) => state.auth.email);
  const auth_token = useTypedSelector((state) => state.auth.auth_token);
  const dispatch = useAppDispatch();
  return (
    <Center style={{ height: "100vh" }}>
      <Stack>
        <Text>Вы авторизованы</Text>
        {email && <Text>Email: {email}</Text>}
        {auth_token && <Text>Token: {auth_token.slice(0, 10)}</Text>}

        <Button onClick={() => dispatch(logout())}>Выйти</Button>
      </Stack>
    </Center>
  );
};

export default HomePage;
