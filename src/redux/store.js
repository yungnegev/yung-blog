import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { postsReducer } from './slices/Post'

const logger = createLogger()

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    } 
})

export default store