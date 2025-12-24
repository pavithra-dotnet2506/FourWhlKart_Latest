import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Car } from "lucide-react";

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
  initialState: [] as Car[],
  reducers: {
    addFavorite: (state, action: PayloadAction<Car>) => {
      //state.push(action.payload);
      //console.log("<< add >>");

      const index = state.findIndex((car) => car.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }

      // add to front
      state.unshift(action.payload);

      // keep max 10
      if (state.length > 10) {
        state.pop();
      }
    },
    removeFavorite: (state, action: PayloadAction<Car>) => {
      //console.log("<< remove >>");
      //return state.filter((id) => id !== action.payload);
      return state.filter((car) => car.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
