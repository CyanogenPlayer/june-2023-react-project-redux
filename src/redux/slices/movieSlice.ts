import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IPagination} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movie: IMovie
    movies: IMovie[],
    totalPages: number
}

const initialState: IState = {
    movie: null,
    movies: [],
    totalPages: 1
}

const getAll = createAsyncThunk<IPagination<IMovie>, { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const getById = createAsyncThunk<IMovie, { movieId: number }>(
    'movieSlice/getById',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(movieId);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const getByGenreId = createAsyncThunk<IPagination<IMovie>, { genreId: number, page: number }>(
    'movieSlice/getByGenreId',
    async ({genreId, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genreId, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const getBySearchPhrase = createAsyncThunk<IPagination<IMovie>, { phrase: string, page: number }>(
    'movieSlice/getBySearchPhrase',
    async ({phrase, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getBySearchPhrase(phrase, page);
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload
            })

            .addMatcher(isFulfilled(getAll, getByGenreId, getBySearchPhrase), (state, action) => {
                const {results, total_pages} = action.payload
                state.movies = results
                if (total_pages > 500) {
                    state.totalPages = 500
                } else {
                    state.totalPages = total_pages
                }
            })
    }
});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    getByGenreId,
    getBySearchPhrase
}

export {
    movieActions,
    movieReducer
}