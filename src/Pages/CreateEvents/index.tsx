import { Button, Group, MultiSelect, Stack, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import '@mantine/dates/styles.css';
import { DateInput } from "@mantine/dates";

interface EventDetails {
  name: string;       
  date: string | Date;
  venue: string;      
  guestList: string[];
}

export function CreateEvents() {

  const { getInputProps, onSubmit, key } = useForm<EventDetails>({
    initialValues: {
      date: "",
      guestList: [],
      name: "",
      venue: "",
    },
  });

  const handleSubmit = (val) => {

  }

  return (
    <Stack align="center">
      <Title w="50%" ta="left" order={1}>
        Create Event
      </Title>
        <Stack w="50%">
          <form onSubmit={onSubmit(handleSubmit)}>
            <Stack>
              <Group grow>
                <TextInput
                  label="Name"
                  placeholder="Enter name"
                  tt="uppercase"
                  key={key("name")}
                />
                <DateInput
                  valueFormat="DD MMM YYYY"
                  label="Date input"
                  placeholder="Date input"
                  tt="uppercase"
                  key={key("date")}
                />
              </Group>
              <Group grow>
                <TextInput
                  label="Venue"
                  placeholder="Enter venue"
                  tt="uppercase"
                  key={key("venue")}
                />
                <MultiSelect
                  label="Guests"
                  placeholder="Select guests"
                  tt="uppercase"
                  key={key("guestList")}
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                />
              </Group>
              <Button w="fit-content" radius="xl" type="submit" style={{ alignSelf: "end" }}>
                Create Event
              </Button>
            </Stack>
          </form>
      </Stack>
    </Stack>
  );
}