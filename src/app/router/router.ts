import { createBrowserRouter } from "react-router-dom";

import { privateRoutes } from "./router.private";
import { publicRoutes } from "./router.public";

// TODO: auth must e checked
const Router = createBrowserRouter([
  ...publicRoutes,
  ...privateRoutes
]);

export {
  Router
}