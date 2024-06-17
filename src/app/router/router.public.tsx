import { RouteObject, Outlet } from "react-router-dom";

import { RouterList } from "@app-router";
import { PublicLayout, SignInPage, SignUpPage, ResetPasswordPage, RestorePasswordPage, PublicErrorPage } from "@pages";

const publicRoutes: RouteObject[] = [
  {
    element: <PublicLayout content={ <Outlet /> } />,
    children: [
      {
        path: RouterList.SIGNIN,
        element: <SignInPage />
      },
      {
        path: RouterList.SIGNUP,
        element: <SignUpPage />
      },
      {
        path: RouterList.RESET_PASSWORD,
        element: <ResetPasswordPage />
      },
      {
        path: RouterList.RESTORE_PASSWORD,
        element: <RestorePasswordPage />
      },
      {
        path: RouterList.ERROR,
        element: <PublicErrorPage />
      }
    ],
    errorElement: <PublicErrorPage />
  }
];

export {
  publicRoutes
};