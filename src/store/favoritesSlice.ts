import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  engine: string;
  ownership: string;
  image: string;
};

// favoritesSlice.ts
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [] as number[],
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
