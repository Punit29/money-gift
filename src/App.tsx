import { AppShell, Button, useMantineColorScheme } from '@mantine/core'
import { Header } from "./components/Header";
import { Outlet } from 'react-router-dom';
import "@mantine/core/styles.css";
import { AuthProvider } from './providers/Auth';

export function App() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <AuthProvider>
      <AppShell
        padding="md"
        header={{ height: 60 }}
      >
        <Header colorScheme={colorScheme} onToggleColorScheme={toggleColorScheme} />
        <AppShell.Main>
          <Outlet /> 
        </AppShell.Main>
      </AppShell>
    </AuthProvider>
  );
}
