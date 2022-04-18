import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { getPosts } from "../api/posts_api";

const initialState = {
  data: [],
  status: "idle",
}

export const getPostAsync = createAsyncThunk("post/getPosts", async () => {
  try {
    const response = await getPosts()
    return {
      data: response.data,
    }
  } catch (error) {
    throw error
  }
})

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    create: (state, action) => {
      const newData = action.payload.data
      state.data = [...state.data, newData]
    },
    update: (state, action) => {
      state.data = []
    },
    delete: (state, action) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPostAsync.pending, (state) => {
      state.status = "loading"
    })
    .addCase(getPostAsync.fulfilled, (state, action) => {
      state.status = "idle"
      state.data = action.payload.data
    })
  }
})

export const {create} = postSlice.actions

export const dataPosts = createSelector(
  (state) => ({
    data: state.post.data
  }), (state) => state
)

export default postSlice.reducer