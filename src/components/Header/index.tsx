import { AppShell, ActionIcon, Group, NavLink as MantineNavLink, Title } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/page-a",
    label: "PageA",
  },
  {
    path: "/page-b",
    label: "PageB",
  },
  {
    path: "/broken",
    label: "Broken",
  },
];

export function Header({ colorScheme, onToggleColorScheme }) {
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