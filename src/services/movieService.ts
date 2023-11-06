import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IPagination} from "../interfaces";

const movieService = {
    getAll: (page: number): IRes<IPagination<IMovie[]>> => axiosService.get(urls.movies,
        {params: {page}})
}

export {
    movieService
}