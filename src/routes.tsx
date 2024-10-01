import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { PageA } from "./Pages/Page-A";
import { PageB } from "./Pages/Page-B";
import { AuthenticationForm } from "./Pages/AuthForm";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
  {
    path: "/auth",
    element: <AuthenticationForm />
  },
]);