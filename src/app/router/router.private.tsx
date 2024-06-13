import { RouteObject, Outlet } from "react-router-dom";
import { RouterList } from "@app-router";

import { PrivateLayout, LobbyPage, SettingsPage } from "@pages";

const privateRoutes: RouteObject[] = [
  {
    element: <PrivateLayout content={<Outlet />} />,
    children: [
      {
        path: RouterList.LOBBY,
        element: <LobbyPage />,
      },
      {
        path: RouterList.SETTINGS,
        element: <SettingsPage />
      }
    ]
  }
];

export {
  privateRoutes
};