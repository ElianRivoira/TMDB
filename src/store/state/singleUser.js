import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSingleUser = createAction("SET_SINGLE_USER");

export default createReducer({}, {
    [setSingleUser]: (state, action) => action.payload
})