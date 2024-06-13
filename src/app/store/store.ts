import { configureStore } from "@reduxjs/toolkit";

import { AuthSliceReducer } from "./slices";

const Store = configureStore({
  reducer:{
    auth: AuthSliceReducer
  }
});

export {
  Store
};

export type RootStoreType = ReturnType<typeof Store.getState>;

export type RootStoreDispatchType = typeof Store.dispatch;