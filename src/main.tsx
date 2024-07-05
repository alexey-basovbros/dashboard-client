import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";

import { App } from '@app';
import { Router } from "@app-router";
import { Store } from "@app-store";

import "@assets/scss/style.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <StoreProvider store={Store}>
        <RouterProvider router={Router} />
      </StoreProvider>
    </App>
  </React.StrictMode>,
)