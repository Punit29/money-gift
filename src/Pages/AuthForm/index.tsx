import { useToggle, upperFirst, useLocalStorage } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ComponentProps } from 'react';

type PaperProps = ComponentProps<typeof Paper>;


export interface FormValues {
  email: string;
  name: string;
  password: string;
  terms: boolean;
  loggedUser?: boolean;
}

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'register']);
  const navigate = useNavigate();
  const [, setLoggedInUser] = useLocalStorage({
    key: "loggedUser",defaultValue:{
      email:"",
      name: "",
      password:"",
      loggedUser: true,
  terms: true,}
  });
  const form = useForm<FormValues>({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
      loggedUser:true,
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const [users, setUsers] = useLocalStorage<FormValues[]>({
    key: "users",
    defaultValue: [],
  })
  console.log("users",users)

  const handleSubmit = (val:FormValues) => {
    console.log("form data", val)
    if (type === "login") {
        const loggedUser = users.find(user => user.email === val.email);
        if (loggedUser) {    
        loggedUser.loggedUser = true;
        setLoggedInUser(loggedUser);
        navigate("/");
      }
    } else {
        const user = {...val};
        // user.login = "true";
        setUsers([...users, user ]);
        setLoggedInUser(val);
        navigate("/");
    }
  }

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        {type}
      </Text>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@email.com"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Password should include at least 6 characters'}
            radius="md"
          />

          {type === 'register' && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
