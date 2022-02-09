import { configureStore } from "@reduxjs/toolkit";
import { fontsApiSlice } from "../features/fonts/googleFontsSlice";
import fontReducer from "../features/fonts/fontsSlice";
export const store = configureStore({
  reducer: {
    [fontsApiSlice.reducerPath]: fontsApiSlice.reducer,
    selectedFont: fontReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(fontsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
