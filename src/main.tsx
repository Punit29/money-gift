import { MantineProvider, createTheme } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Routers } from "./routes";
import "@fontsource/ruda/400.css";
import "@fontsource/ruda/500.css";
import "@fontsource/ruda/600.css";
import "@fontsource/ruda/700.css";
import "@fontsource/ruda/800.css";
import "@fontsource/ruda/900.css";

export const MantineTheme = createTheme({
  fontFamily: "Ruda, san-serif",
});

createRoot((document.getElementById('root')!)).render(
  <StrictMode>
    <MantineProvider theme={MantineTheme}>
      <RouterProvider router={Routers} />
    </MantineProvider>
  </StrictMode>,
);