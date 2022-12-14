import { createAction, createReducer } from "@reduxjs/toolkit";

export const logIn = createAction("LOG_IN");
export const logOut = createAction("LOG_OUT");
export const addFav = createAction("ADD_FAV");

const initialState = {
  id:null,
  name:null,
  lastName:null,
  email:null,
  dateOfBirth:null
};

export default createReducer(initialState, {
  [logIn]: (state, action) => action.payload,
  [logOut]: (state, action) => initialState
});
