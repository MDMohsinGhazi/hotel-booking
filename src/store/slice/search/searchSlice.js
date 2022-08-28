import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destination: "",
  checkIn: new Date(),
  checkOut: new Date(),
  count: {
    adults: 2,
    children: 0,
    rooms: 1,
  },
  price: {
    min: 0,
    max: 500000,
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDateRange: (state, { payload }) => {
      const { startDate, endDate } = payload;
      state.checkIn = startDate;
      state.checkOut = endDate;
    },
    increment: (state, { payload }) => {
      state.count[payload] += 1;
    },
    decrement: (state, { payload }) => {
      if (payload === "children" && state.count[payload] > 0) {
        state.count[payload] -= 1;
      }
      if (
        (payload === "adults" || payload === "rooms") &&
        state.count[payload] > 1
      ) {
        state.count[payload] -= 1;
      }
    },
    setDestination: (state, { payload }) => {
      state.destination = payload;
    },
    setMaxPrice: (state, { payload }) => {
      state.price.max = payload;
    },
  },
});

export const {
  setDateRange,
  increment,
  decrement,
  setDestination,
  setMaxPrice,
} = searchSlice.actions;

export default searchSlice.reducer;
