import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInst from '../../utils/axios'

export const sendPost = createAsyncThunk('sendPost/send', async (post) => {
    let response = await axiosInst.post(`/posts`, post )
    return response.data
})


const initialState = {
    loading: false,
    items: [],
    error: null,
}

const sendPostSlice = createSlice({
    name: 'sendPost',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(sendPost.pending, state => {
            state.loading = true
        })
        builder.addCase(sendPost.fulfilled, (state, action) => {
            state.loading  = false
            state.items = action.payload
            state.error = ''
        })
        builder.addCase(sendPost.rejected, (state, action) => {
            state.loading = false
            state.items = []
            state.error = action.error.message
        })
    }
})

export const sendPostReducer = sendPostSlice.reducer