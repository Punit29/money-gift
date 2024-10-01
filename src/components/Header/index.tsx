import { AppShell, ActionIcon, Group, NavLink as MantineNavLink, Title, MantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


export interface HeaderProps {
  colorScheme: MantineColorScheme;
  onToggleColorScheme: () => void;
}

const NavLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/events",
    label: "Events",
  },
];

export function Header({ colorScheme, onToggleColorScheme }: HeaderProps) {
  const location = useLocation();

  return (
    <AppShell.Header p="xs">
      <Group justify="space-between" align="center">
        <Title order={5}>Header</Title>
        <Group wrap="nowrap">
          {NavLinks.map(({ path, label }) => {
            return (
              <MantineNavLink
                key={path}
                component={NavLink}
                active={location.pathname === path}
                to={path}
                label={label}
              />
            );
          })}
        </Group>
        <ActionIcon onClick={onToggleColorScheme} variant="default">
          {colorScheme === "dark" ? <IconSun /> : <IconMoonStars />}
        </ActionIcon>
      </Group>
    </AppShell.Header>
  );
}

Header.propTypes = {
    colorScheme: PropTypes.oneOf(["light", "dark"]).isRequired,
    onToggleColorScheme: PropTypes.func.isRequired,
  };