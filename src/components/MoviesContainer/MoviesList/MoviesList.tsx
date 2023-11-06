import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'

const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect(() => {
        movieService.getAll(+page).then(({data: {results}}) => setMovies(results));
    }, [page]);

    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesList
}