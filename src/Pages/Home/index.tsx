import { Center, Stack, Title } from "@mantine/core";
import { useAuthContext } from "../../providers/Auth";

export function Home(): JSX.Element {

    const { user } = useAuthContext();

  return (
    <>
      <Center w="100%" h="100vh" p="xl">
        <Stack align="center" gap="xl">
          <Title order={3}>Hey there, {user?.name}</Title>
          <Title order={1}>
            Welcome to GIF
            <Title component="span" c="blue">
              TING!!!!
            </Title>
          </Title>
        </Stack>
      </Center>
    </>
  );
}