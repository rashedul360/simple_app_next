import { createSlice } from "@reduxjs/toolkit";
type Counter = {
 count: Number | bigint | any;
};
const initialState: Counter = {
 count: 10,
};
const counterSlice = createSlice({
 name: "count",
 initialState,
 reducers: {
  increment: (state, action) => {
   state.count++;
  },
  decrement: (state, action) => {
   state.count--;
  },
 },
});

export default counterSlice.reducer;
export const {} = counterSlice.actions;
