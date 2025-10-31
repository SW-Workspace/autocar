import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth.slice";
import carReducer from "./slices/car/car.slice";
import filterReducer from "./slices/filters/filters.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
    filters: filterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
