import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slices/formSlice";

const store = configureStore({
  reducer: {
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
