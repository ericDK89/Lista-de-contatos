import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./reducers/contacts";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
