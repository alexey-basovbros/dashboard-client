import { RouteObject, Outlet } from "react-router-dom";
import { RouterList } from "@app-router";

import { PrivateLayout, LobbyPage, SettingsPage, PrivateErrorPage } from "@pages";

import { Sidebar, PrivateNavbar, Footer } from "@features";

const privateRoutes: RouteObject[] = [
  {
    element: <PrivateLayout
      sidebar={<Sidebar />}
      navbar={<PrivateNavbar />}
      content={<Outlet />}
      footer={<Footer />}
    />,
    children: [
      {
        path: RouterList.LOBBY,
        element: <LobbyPage />,
      },
      {
        path: RouterList.SETTINGS,
        element: <SettingsPage />
      },
      {
        path: RouterList.ERROR,
        element: <PrivateErrorPage />
      }
    ],
    errorElement: <PrivateErrorPage />
  }
];

export {
  privateRoutes
};