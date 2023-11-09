import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {movieService} from "../../services";
import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MovieInfo.module.css'
import {StarsRating} from "../StarsRating/StarsRating";

const MovieInfo = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState<IMovie>(null);

    useEffect(() => {
        movieService.getById(+movieId).then(({data}) => setMovie(data));
    }, [movieId]);

    return (
        <>
            {movie &&
                <div className={css.MovieInfo}>
                    <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
                    <h4>{movie.title}</h4>
                    <p>Original title: {movie.original_title}</p>
                    <p>Release date: {movie.release_date}</p>
                    <StarsRating rating={movie.vote_average}/>
                    <div>{movie.genres.map(genre => <p>{genre.name}</p>)}</div> {/*TODO create GenreBadge component and use it here*/}
                    <p>{movie.overview}</p>
                    {/*TODO add Actors*/}
                </div>
            }
        </>
    );
};

export {
    MovieInfo
}