import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInst from '../../utils/axios'

export const loadPost = createAsyncThunk('singlePost/loadPost', async (id) => {
    let response = await axiosInst.get(`/posts/${id}`)
    return response.data
})


const initialState = {
    loading: false,
    items: [],
    error: null,
}

const singlePostSlice = createSlice({
    name: 'singlePost',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadPost.pending, state => {
            state.loading = true
        })
        builder.addCase(loadPost.fulfilled, (state, action) => {
            state.loading  = false
            state.items = action.payload
            state.error = ''
        })
        builder.addCase(loadPost.rejected, (state, action) => {
            state.loading = false
            state.items = []
            state.error = action.error.message
        })
    }
})

export const singlePostReducer = singlePostSlice.reducer