import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movies/movieSLice';

export const store = configureStore({
    reducer: {
        movies: movieReducer
    }
})