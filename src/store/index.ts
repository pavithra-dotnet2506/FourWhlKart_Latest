import { configureStore } from "@reduxjs/toolkit";
import recentlyViewedReducer from "./recentlyViewedSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    recentlyViewed: recentlyViewedReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
