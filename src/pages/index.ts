// Private
import { PrivateLayout, PrivateLayoutProps } from "./private/layout"
import { LobbyPage } from "./private/lobby";
import { SettingsPage } from "./private/settings";
import { ErrorPage as PrivateErrorPage } from "./private/error-page";
// Public
import { PublicLayout, PublicLayoutProps } from "./public/layout";
import { SignInPage } from "./public/signin";
import { SignUpPage } from "./public/signup";
import { ResetPasswordPage } from "./public/reset-password";
import { RestorePasswordPage } from "./public/restore-password";
import { ErrorPage as PublicErrorPage } from "./public/error-page";

export {
  // Layouts
  PrivateLayout,
  PublicLayout,
  // Private pages
  LobbyPage,
  SettingsPage,
  PrivateErrorPage,
  // Publiic pages
  SignInPage,
  SignUpPage,
  ResetPasswordPage,
  RestorePasswordPage,
  PublicErrorPage
};

export type {
  PrivateLayoutProps,
  PublicLayoutProps
};