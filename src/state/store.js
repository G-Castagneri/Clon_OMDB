//cp
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import moviesReducer from "./movies";
import userReducer from "./user";
import favoriteReducer from "./favorite";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    movies: moviesReducer,
    user: userReducer,
    favorite: favoriteReducer,
  },
});

export default store;
