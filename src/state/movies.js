import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// buscar por id http://www.omdbapi.com/?apikey=cc4627c5&i=tt0372784

// al dar click en boton busca la pelicula seria mi onSubmit  {searchMovies(movie)} //
export const searchMovies = createAsyncThunk("MOVIES", (movie) => {
  return axios
    .get(`https://www.omdbapi.com/?apikey=cc4627c5&s=${movie}`)
    .then((res) => res.data);
});
/* 
export const movieId = createAsyncThunk("MOVIES_ID", (movieId) => {
  console.log("REDUx MOVIEID", movieId);
  const promisesArr = [];
  return axios
    .get(`https://www.omdbapi.com/?apikey=cc4627c5&i=${movieId}`)
    .then((res) => {
      promisesArr.push(res.data);

      return promisesArr;
    });
  }); */

const moviesReducer = createReducer([], {
  [searchMovies.fulfilled]: (state, action) => (state = action.payload),
  //[movieId.fulfilled]: (state, action) => (state = action.payload),
});

export default moviesReducer;
