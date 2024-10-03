import { Button, Center, Stack, Title } from "@mantine/core";
import { useAuthContext } from "../../providers/Auth";
import { Link } from "react-router-dom";

export function Home(): JSX.Element {

    const { user } = useAuthContext();

  return (
    <Center w="100%" h="80vh" p="xl">
      <Stack align="center" gap="xl">
        <Title order={3}>Hey there, {user?.name}</Title>
        <Title order={1}>
          Welcome to GIF
          <Title component="span" c="blue">
            TING!!!!
          </Title>
        </Title>
        <Button component={Link} to="/events/create">Create New Event</Button>
        <Button component={Link} to="/invite/create">Create Invite</Button>
      </Stack>
    </Center>
  );
}