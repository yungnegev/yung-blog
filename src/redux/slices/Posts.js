import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInst from '../../utils/axios'

export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
    let response = await axiosInst.get('/posts')
    return response.data
})

export const removePost = createAsyncThunk('posts/removePost', async (id) => {
    const { data } = await axiosInst.delete(`/posts/${id}`)
    return data
})



const initialState = {
    loading: false,
    items: [],
    error: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadPosts.pending, state => {
            state.loading = true
        })
        builder.addCase(loadPosts.fulfilled, (state, action) => {
            state.loading  = false
            state.items = action.payload
            state.error = ''
        })
        builder.addCase(loadPosts.rejected, (state, action) => {
            state.loading = false
            state.items = []
            state.error = action.error.message
        })
        builder.addCase(removePost.pending, (state) => {
            state.loading = true
        })
        builder.addCase(removePost.fulfilled, (state, action) => {
            state.loading = false
            state.items = state.items.filter(obj => obj._id !== action.meta.arg)
        })
    }
})

export const postsReducer = postsSlice.reducer