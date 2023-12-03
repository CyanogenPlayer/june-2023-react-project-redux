import {FC, useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard";
import css from './MoviesList.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../redux";

interface IProps {
    page: string,
    genre: string,
    search: string,
    changePaginateKey: () => void
}

const MoviesList: FC<IProps> = ({page, genre, search, changePaginateKey}) => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (genre && genre !== '') {
            dispatch(movieActions.getByGenreId({genreId: +genre, page: +page}))
            changePaginateKey();
        } else if (search && search !== '') {
            dispatch(movieActions.getBySearchPhrase({phrase: search, page: +page}))
            changePaginateKey();
        } else {
            dispatch(movieActions.getAll({page: +page}))
        }
    }, [page, genre, search, dispatch, changePaginateKey]);

    return (
        <div className={css.MoviesList}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    MoviesList
}