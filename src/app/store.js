import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import MovieReducer from '../features/movie/movieSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        movie: MovieReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})