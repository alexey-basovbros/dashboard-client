// Private
import { PrivateLayout, PrivateLayoutProps } from "./private/layout"
import { LobbyPage } from "./private/lobby";
import { SettingsPage } from "./private/settings";
// Public
import { PublicLayout, PublicLayoutProps } from "./public/layout";
import { SignInPage } from "./public/signin";
import { SignUpPage } from "./public/signup";
import { ResetPasswordPage } from "./public/reset-password";
import { RestorePasswordPage } from "./public/restore-password";

export {
  // Layouts
  PrivateLayout,
  PublicLayout,
  // Private pages
  LobbyPage,
  SettingsPage,
  // Publiic pages
  SignInPage,
  SignUpPage,
  ResetPasswordPage,
  RestorePasswordPage
};

export type {
  PrivateLayoutProps,
  PublicLayoutProps
};