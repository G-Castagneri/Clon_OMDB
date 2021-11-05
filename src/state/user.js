import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("SET_USER");

export const registerUser = createAsyncThunk("USER", (data) => {
  return axios
    .post(`http://localhost:3001/user/register`, data)
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
});

export const loginUser = createAsyncThunk("LOGIN", (data) => {
  return axios
    .post(`http://localhost:3001/user/login`, data)
    .then((res) => {
      res.data.login = true;
      return res.data;
    })
    .catch((err) => {
      console.log({ err });
    });
});

export const logoutUser = createAsyncThunk("LOGOUT", (data) => {
  return axios
    .post(`http://localhost:3001/user/logout`, data)
    .then((res) => {
      //  res.data.login=false
      return [];
    })
    .catch((err) => {
      console.log({ err });
    });
});

const userReducer = createReducer([], {
  [registerUser.fulfilled]: (state, action) => action.payload,
  [loginUser.fulfilled]: (state, action) => action.payload,
  [logoutUser.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
