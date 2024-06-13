import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import { App } from '@app';
import { Router } from "@app-router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={Router} />
    </App>
  </React.StrictMode>,
)