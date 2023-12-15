import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./features/favorite/favoriteSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      favorite: favoriteReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
