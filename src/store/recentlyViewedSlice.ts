import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Car = {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
};

const recentlyViewedSlice = createSlice({
  name: "recentlyViewed",
  initialState: [] as Car[],
  reducers: {
    addRecentlyViewed: (state, action: PayloadAction<Car>) => {
      // remove if exists
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
  },
});

export const { addRecentlyViewed } = recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// export type Car = {
//   id: number;
//   make: string;
//   model: string;
//   year: number;
//   price: number;
//   image: string;
// };

// const recentlyViewedSlice = createSlice({
//   name: "recentlyViewed",
//   initialState: [] as Car[],
//   reducers: {
//     addRecentlyViewed: (state, action: PayloadAction<Car>) => {
//       console.log("..am inside slice...");

//       const exists = state.find((c) => c.id === action.payload.id);
//       if (!exists) {
//         state.unshift(action.payload);
//       }
//       return state.slice(0, 5);
//     },
//   },
// });

// export const { addRecentlyViewed } = recentlyViewedSlice.actions;
// export default recentlyViewedSlice.reducer;
