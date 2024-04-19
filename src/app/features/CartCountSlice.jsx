import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CartCountSlice = createSlice({
  name: "cartItemCount",
  initialState,
  reducers: {
    cartProductCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { cartProductCount } = CartCountSlice.actions;

export default CartCountSlice.reducer;
