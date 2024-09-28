import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ErrorPage } from "./pages/ErrorPage";
import { PageA } from "./pages/Page-A";
import { PageB } from "./pages/Page-B";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "page-a",
        element: <PageA />,
      },
      {
        path: "page-b",
        element: <PageB />,
      },
    ],
  },
]);