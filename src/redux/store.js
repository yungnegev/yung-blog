import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { postsReducer } from './slices/Posts'
import { singlePostReducer } from './slices/SinglePost'
import { authReducer } from './slices/auth'

const logger = createLogger()

const store = configureStore({
    reducer: {
        posts: postsReducer,
        singlePost: singlePostReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    } 
})

export default store