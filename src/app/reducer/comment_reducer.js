import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { getPostComment } from "../api/comment_api";

const initialState = {
  data: [],
  status: "idle",
}

export const getCommentAsync = createAsyncThunk("comment/getComments", async (idPost) => {
  try {
    const response = await getPostComment(idPost)
    return {
      data: response.data,
      postId: idPost
    }
  } catch (error) {
    throw error
  }
})

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    create: (state, action) => {
      const newData = action.payload.data
      let comment = state.data.find(x => x.postId.toString() === newData.postId)
      let idx = state.data.findIndex(x => x.postId.toString() === newData.postId)

      if (comment) {
        comment.comments.push(newData)
        state.data[idx] = comment
      } else {
        let temp = {postId: newData.postId, comments: [newData] ?? []}
        state.data = [...state.data, temp]
      }
      // state.data = [...state.data, newData]
    },
    update: (state, action) => {
      const newData = action.payload.data
      let commentPost = state.data.find(x => x.postId.toString() === newData.postId)
      let idxComent = commentPost.comments.findIndex(x => x.id === newData.id)
      let idxPost = state.data.findIndex(x => x.postId.toString() === newData.postId)
      commentPost.comments[idxComent].name = newData.name
      commentPost.comments[idxComent].body = newData.body

      state.data[idxPost] = commentPost
    },
    deleteComment: (state, action) => {
      const newData = action.payload.data
      let commentPost = state.data.find(x => x.postId.toString() === newData.postId)
      let idxPost = state.data.findIndex(x => x.postId.toString() === newData.postId)
      let newComment = commentPost.comments.filter(x => x.id !== newData.id)
      state.data[idxPost].comments = newComment
    },
    deletePostComment: (state,action) => {
      const payload = action.payload.data
      const newData = state.data.filter(x => x.postId !== payload.postId) 

      state.data = newData
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCommentAsync.pending, (state) => {
      state.status = "loading"
    })
    .addCase(getCommentAsync.fulfilled, (state, action) => {
      let existed = state.data.find(x => x.postId.toString() === action.payload.postId)
      let payload = {postId: action.payload.postId, comments: action.payload.data ?? []}
      state.status = "idle"
      if (!existed) {
        state.data = [...state.data, payload]
      }
    })
  }
})

export const {create, update, deleteComment, deletePostComment} = commentSlice.actions

export const dataComment = createSelector(
  (state) => ({
    data: state.comment.data
  }), (state) => state
)

export default commentSlice.reducer