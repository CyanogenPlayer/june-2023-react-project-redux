import React, {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import css from './MoviesListCard.module.css'
import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StarsRating} from "../../StarsRating/StarsRating";

interface IProp {
    movie: IMovie
}

const MoviesListCard: FC<IProp> = ({movie}) => {
    const {id, title, vote_average, poster_path} = movie;

    const navigate = useNavigate();

    const navigateToMovieInfo = () => {
        navigate(`${id}`)
    }

    return (
        <div className={css.MoviesListCard} onClick={navigateToMovieInfo}>
            <PosterPreview poster_path={poster_path} title={title} className={css.PosterPreview}/>
            <div className={css.Container}>
                <h4>{title}</h4>
                <StarsRating rating={vote_average}/>
            </div>
        </div>
    );
};

export {
    MoviesListCard
}