import {IRes} from "../types";
import {IGenreList} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const genreService = {
    getAll: (): IRes<IGenreList> => axiosService.get(urls.genres.allGenres)
}

export {
    genreService
}