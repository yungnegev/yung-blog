import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInst from '../../utils/axios'

export const loadPosts = createAsyncThunk('posts/loadPosts', async () => {
    let response = await axiosInst.get('/posts')
    return response.data
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
    }
})

export const postsReducer = postsSlice.reducer