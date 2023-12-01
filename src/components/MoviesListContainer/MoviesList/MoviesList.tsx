import {FC, useEffect, useState} from "react";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {MoviesListCard} from "../MoviesListCard";
import css from './MoviesList.module.css'

interface IProps {
    page: string,
    genre: string,
    search: string,
    totalPagesSet: (totalPageCount: number) => void
    changePaginateKey: () => void
}

const MoviesList: FC<IProps> = ({page, genre, search, totalPagesSet, changePaginateKey}) => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        if (genre && genre !== '') {
            movieService.getByGenreId(+genre, +page).then(({data: {results, total_pages}}) => {
                setMovies(results);
                totalPagesSet(total_pages);
            });
            changePaginateKey();
        } else if (search && search !== '') {
            movieService.getBySearchPhrase(search, +page).then(({data: {results, total_pages}}) => {
                setMovies(results);
                totalPagesSet(total_pages);
            });
            changePaginateKey();
        } else {
            movieService.getAll(+page).then(({data: {results, total_pages}}) => {
                setMovies(results);
                totalPagesSet(total_pages);
            });
        }
    }, [page, genre, search]);

    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesList
}