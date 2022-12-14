import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    posts: {
        status: 'noStatus',
        items: []
    }
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {}
})

export const postsReducer = postsSlice.reducer