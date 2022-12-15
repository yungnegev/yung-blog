import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'


export const fetchLogin = createAsyncThunk('auth/login', async (data) => {
    let response = await axios.post('/auth/login', data)
    return response.data
})

export const fetchMe = createAsyncThunk('auth/me', async () => {
    let response = await axios.get('/auth/me')
    return response.data
})


let initialState = {
    isAuth: false,
    data: null,
    status: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false
            state.data = null 
            state.status = null
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchLogin.pending, (state) => {
            state.status = 'loading...'
        }),
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.isAuth = true
            state.data = action.payload
            state.status = 'success'
        }),
        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.isAuth = false
            state.status = 'Nah fam...'
            state.data = null
        })
        builder.addCase(fetchMe.pending, (state) => {
            state.status = 'loading...'
        }),
        builder.addCase(fetchMe.fulfilled, (state, action) => {
            state.isAuth = true
            state.data = action.payload
            state.status = 'success'
        }),
        builder.addCase(fetchMe.rejected, (state, action) => {
            state.isAuth = false
            state.status = 'Nah fam...'
            state.data = null
        })
    }
})

export const authReducer = authSlice.reducer
export const { logout } = authSlice.actions