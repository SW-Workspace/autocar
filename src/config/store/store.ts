import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth.slice";
import carReducer from "./slices/car/car.slice";
import carFilterReducer from "./slices/filters/filters.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    car: carReducer,
    carsFilter: carFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
