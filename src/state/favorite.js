import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const addFavorite = createAsyncThunk("FAVORITE", (movie) => {
  return axios
    .post(`http://localhost:3001/favorite`, movie)
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
});

export const getFavorite = createAsyncThunk("GET_FAVORITE", (id) => {
  return (
    axios
      .get(`http://localhost:3001/favorite/${id}`)
      //trae los id de los fav del back
      .then((res) => res.data)
      .then((pelis) => {
        const promisesArr = [];
        for (let fav of pelis) {
          promisesArr.push(
            axios
              .get(`https://www.omdbapi.com/?apikey=cc4627c5&i=${fav.movieId}`)
              .then((res) => res.data)
              );
            }
            return Promise.all(promisesArr)
          })
     
      .catch((err) => {
        console.log({ err });
      })
  );
});

export const removeFavorite = createAsyncThunk("DELETE_FAVORITE", (data) => {
  const { user, movieId } = data;

  return axios
    .delete(`http://localhost:3001/favorite/delete/${user}/${movieId}`)

    .then(() => axios.get(`http://localhost:3001/favorite/${user}`))

    .then((pelis) => {
      const promisesArr = [];
      for (let fav of pelis.data) {
        promisesArr.push(
          axios
            .get(`https://www.omdbapi.com/?apikey=cc4627c5&i=${fav.movieId}`)
            .then((res) => res.data)
        );
      }
      return Promise.all(promisesArr);
    })
    .then((res) => {
      localStorage.setItem("fav", JSON.stringify(res));
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
});
const favoriteReducer = createReducer([], {
  [addFavorite.fulfilled]: (state, action) => (state = action.payload),
  [getFavorite.fulfilled]: (state, action) => (state = action.payload),
  [removeFavorite.fulfilled]: (state, action) => (state = action.payload),
});

export default favoriteReducer;
