import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIkey } from '../../common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
        const response = await movieApi.get(
            `?apiKey=${APIkey}&s=${term}&type=movie`
        );
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
        const response = await movieApi.get(
            `?apiKey=${APIkey}&s=${term}&type=series`
        );
        return response.data;
    }
);

export const fetchAsyncMovieOrShowsDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowsDetail",
    async (id) => {
        const response = await movieApi.get(
            `?apiKey=${APIkey}&i=${id}&Plot=full`
        );
        return response.data;
    }
);

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShows: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShows = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, () => {
                console.log('pending')
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                return { ...state, movies: payload };
            })
            .addCase(fetchAsyncMovies.rejected, () => {
                console.log('rejected')
            })
            .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
                return { ...state, shows: payload };
            })
            .addCase(fetchAsyncMovieOrShowsDetail.fulfilled, (state, { payload }) => {
                return { ...state, selectedMovieOrShows: payload };
            })
    },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShows;
export default movieSlice.reducer;