import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setMovies = createAction("SET_MOVIES");

// al dar click en boton busca la pelicula seria mi onSubmit  {searchMovies(movie)} //
export const searchMovies = createAsyncThunk("MOVIES", (movie) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=cc4627c5&s=${movie}`)
    .then((res) => res.data);
});

const moviesReducer = createReducer([], {
  [searchMovies.fulfilled]: (state, action) => (state = action.payload),
});

export default moviesReducer;
