//cp
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from "./movies";
import userReducer from "./user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
});

export default store;
