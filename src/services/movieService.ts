import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";

const movieService = {
    getAll: (page: number): IRes<IPagination<IMovie>> => axiosService.get(urls.movies.allMovies,
        {params: {page}}),
    getById: (movieId: number): IRes<IMovie> => axiosService.get(urls.movies.byId(movieId)),
    getByGenreId: (genreId: number, page: number): IRes<IPagination<IMovie>> => axiosService.get(
        urls.genres.moviesByGenreId(genreId), {params: {page}}),
    getBySearchPhrase: (phrase: string, page: number): IRes<IPagination<IMovie>> => axiosService.get(
        urls.search.searchMoviesByPhrase(phrase), {params: {page}})
}

export {
    movieService
}