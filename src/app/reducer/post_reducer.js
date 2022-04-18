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
      newData.id = new Date().valueOf()
      state.data = [newData, ...state.data]
    },
    update: (state, action) => {
      const payload = action.payload.data
      const idx = state.data.findIndex(x => x.id === payload.id)
      state.data[idx].title = payload.newTitle
      state.data[idx].body = payload.newBody
    },
    deletePost: (state, action) => {
      let payload = action.payload.data
      let newData = state.data.filter(x => x.id !== payload.id)
      state.data = newData
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

export const {create, update, deletePost} = postSlice.actions

export const dataPosts = createSelector(
  (state) => ({
    data: state.post.data,
    status: state.post.status
  }), (state) => state
)

export default postSlice.reducer