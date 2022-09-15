import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./featurs/slicer/authSlice";
import dashReducer from "./featurs/slicer/dashboardSlice";

export const store = configureStore({
  reducer: { auth: authReducer, dashboardToggle: dashReducer },
});
