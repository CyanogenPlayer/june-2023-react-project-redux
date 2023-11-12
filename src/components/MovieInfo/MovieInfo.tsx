import React, {FC, useEffect, useState} from "react";

import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieInfo.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenresContainer";
import {ActorsList} from "../ActorsContainer";
import {useTheme} from "../../hooks";

interface IProp {
    movieId: string
}

const MovieInfo: FC<IProp> = ({movieId}) => {
    const [movie, setMovie] = useState<IMovie>(null);
    const {darkTheme} = useTheme();

    useEffect(() => {
        movieService.getById(+movieId).then(({data}) => setMovie(data));
    }, [movieId]);

    return (
        <>
            {movie &&
                <div className={darkTheme ? css.MovieInfo__Dark : css.MovieInfo__Light} key={movie.id}>
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