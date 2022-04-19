import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./slices/reviewsSlice";
export default configureStore({
  reducer: { reviews: reviewsReducer },
});
