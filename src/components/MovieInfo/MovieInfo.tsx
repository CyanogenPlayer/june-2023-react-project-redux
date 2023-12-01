import React, {FC, useEffect} from "react";

import {PosterPreview} from "../PosterPreview";
import css from './MovieInfo.module.css'
import {StarsRating} from "../StarsRating";
import {GenreBadge} from "../GenresContainer";
import {ActorsList} from "../ActorsContainer";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

interface IProp {
    movieId: string
}

const MovieInfo: FC<IProp> = ({movieId}) => {
    const {movie} = useAppSelector(state => state.movies);
    const {darkMode} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getById({movieId: +movieId}))
    }, [movieId, dispatch]);

    return (
        <>
            {movie &&
                <div className={darkMode ? css.MovieInfo__Dark : css.MovieInfo__Light} key={movie.id}>
                    <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
                    <h4>{movie.title}</h4>
                    <p>Original title: {movie.original_title}</p>
                    <p>Release date: {movie.release_date}</p>
                    <StarsRating rating={movie.vote_average}/>
                    <div className={css.Genres}>Genres:{movie.genres.map(genre => <GenreBadge key={genre.id}
                                                                                              genre={genre}/>)}</div>
                    <p>Overview: {movie.overview}</p>
                    {movie.credits.cast && <ActorsList actors={movie.credits.cast}/>}
                </div>
            }
        </>
    );
};

export {
    MovieInfo
}