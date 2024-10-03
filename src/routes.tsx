import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { PageA } from "./Pages/Page-A";
import { CreateEvents } from "./Pages/CreateEvents";
import { AuthenticationForm } from "./Pages/AuthForm";
import { CreateInvite } from "./Pages/CreateInvite";

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
        path: "events",
        element: <PageA />,
      },
      {
        path: "events/create",
        element: <CreateEvents />,
      },
      {
        path: "invite/create",
        element: <CreateInvite />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationForm />
  },
]);