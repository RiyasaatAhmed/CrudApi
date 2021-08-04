import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getAllPosts, deletePostById } from "../../Helpers/HTTPCalls/httpCalls";


export const fetchPosts = createAsyncThunk(
  "post/setPosts", async() => {
    try{
      console.log('an api call has been made...')
      return await getAllPosts()
    }
    catch(err){
      return err.message
    }
  }
)

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: []
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload.data)
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id.toString() === action.payload.id)
      if(index !== -1){
        state.posts[index] = action.payload.data
      }
    },
    deletePost: (state, action) => {
      const deletedPost = state.posts.find(item => item.id === action.payload.id)
      deletePostById(action.payload.id, current(deletedPost))

      const posts = state.posts.filter(item => item.id !== action.payload.id)
      state.posts = posts
    }
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload
    }
  }
});

export const {
  addPost,
  updatePost,
  deletePost
} = postSlice.actions;
export const postSelector = (state) => state.entities.post;
export default postSlice.reducer;

