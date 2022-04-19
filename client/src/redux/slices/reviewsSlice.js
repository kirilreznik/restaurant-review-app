import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  currentReview: {},
  allReviews: [],
  topSixReviews: [],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: initialAppState,
  reducers: {
    setCurrentReview: (state, action) => {
      state.currentReview = action.payload;
    },
    setAllReviews: (state, action) => {
      state.allReviews = action.payload;
    },
    setTopSixReviews: (state, action) => {
      state.topSixReviews = action.payload;
    },
  },
});

export const { setAllReviews, setCurrentReview, setTopSixReviews } =
  reviewsSlice.actions;

export default reviewsSlice.reducer;
