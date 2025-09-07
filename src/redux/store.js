import { configureStore } from "@reduxjs/toolkit";
import vansReducer from "./vansSlice.js";

export const store = configureStore({
  reducer: {
    vans: vansReducer,
  },
});
