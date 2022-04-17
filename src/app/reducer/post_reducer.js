import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    create: (state, action) => {
      state.data = []
    },
    update: (state, action) => {
      state.data = []
    },
    delete: (state, action) => {
      state.data = []
    },
  }
})

export const {create} = postSlice.actions

export const dataPosts = createSelector(
  (state) => ({
    data: state.post.data
  }), (state) => state
)

export default postSlice.reducer