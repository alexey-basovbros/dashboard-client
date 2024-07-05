import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
import { ConfigProvider, theme } from "antd";

import { App } from '@app';
import { Router } from "@app-router";
import { Store } from "@app-store";

import "antd/dist/reset.css";
import "@assets/scss/style.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm
      }}>
        <StoreProvider store={Store}>
          <RouterProvider router={Router} />
        </StoreProvider>
      </ConfigProvider>
    </App>
  </React.StrictMode>,
)