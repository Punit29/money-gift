import { TextInput, Button, Box, Stack, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

export function CreateInvite(): JSX.Element {
  const form = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Name should have at least 2 characters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email address'),
      phone: (value) =>
        value.length < 10 || value.length > 15 || !/^\+?[0-9]*$/.test(value)
          ? 'Phone number should be between 10-15 digits and contain only numbers'
          : null,
    },
  });

  const handleSubmit = (values: FormValues) => {
    console.log("Form submitted:", values);
  };

  return (
    <Stack align="center">
      <Title w="50%" ta="left" order={1}>
        Create Invite
      </Title>
        <Stack w="50%">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Name"
          placeholder="Your full name"
          {...form.getInputProps('name')}
        />

        <TextInput
          label="Email"
          placeholder="example@email.com"
          mt="md"
          {...form.getInputProps('email')}
        />

        <TextInput
          label="Phone"
          placeholder="1234567890"
          mt="md"
          {...form.getInputProps('phone')}
        />

        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>
      </Stack>
    </Stack>
  );
}
